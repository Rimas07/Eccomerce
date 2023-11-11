import React from 'react'
//import axios from 'axios';
//import { useEffect,useReducer } from 'react';
import { Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { sampleProducts } from "../data";
//import { Product } from '../types/product';
import { getError } from '../utils';
import { ApiError } from '../types/apierror';
import { useGetProductsQuery } from "../hooks/productHooks";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { Helmet } from 'react-helmet-async';



/*type State = {
  products: Product[];
  loading: boolean;
  error: string;
}*/
/*type Action =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Product[];
    }
    | { type: "FETCH_FAIL"; payload: string }
  
const initialState: State = {
  products: [],
  loading: true,
  error: "",
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}*/
 /*const [{ loading, error, products }, dispatch] = useReducer<
        React.Reducer<State, Action>
    >(reducer, initialState);// change estate
    
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get("/api/products");
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });// fetch data from back
            } catch (err) {
                dispatch({
                    type: "FETCH_FAIL",
                    payload: getError(err as ApiError),
                });
            }
        };
        fetchData();
    }, []);// accepts 2 param 1 is func 2 is array  if array empty run once*/



export default function HomePage() {
   const { data: products, isLoading, error } = useGetProductsQuery();
    return isLoading ? (
     <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{getError(error as unknown as ApiError)}</MessageBox>
    ) : (
      <Row>
        <Helmet>
          <title>Eposters</title>
        </Helmet>
        {products!.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    );
}
