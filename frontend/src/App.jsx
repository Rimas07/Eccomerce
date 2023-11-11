
import { useContext, useEffect } from "react";
import { Badge,Container, Nav, Navbar,Button } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'
import { Store } from "./store";
//import { LinkContainer } from "react-router-bootstrap";

import "react-toastify/dist/ReactToastify.css";


//import { sampleProducts } from "./data";

function App() {

   const {
     state: { mode,cart },
     dispatch,
   } = useContext(Store);
  
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };
  
  
  return (
    <div className="d-flex flex-column h-full vh-100">
   

      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Eposters</Navbar.Brand>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>

            <Link to="/cart" className="nav-link">
              {cart.cartItems.length > 0 && (
                
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
               
                </Badge>
                
              )}
            </Link>
            <a href="/signin" className="nav-link">
              Signin
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
