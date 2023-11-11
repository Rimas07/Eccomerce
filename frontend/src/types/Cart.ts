export type CartItem = {
  image: string | undefined;
  slug: string;
  quantity: number;
  countInStock: number;
  price: number;
  _id: string;
  name: string;
};

export type Cart = {
  cartItems: CartItem[];
  itemsPrice: number;
  taxPrice: number;
  totalPrice: number;
};
