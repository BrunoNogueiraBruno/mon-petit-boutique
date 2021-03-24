import { createContext, useState, ReactNode } from "react";
import products from './data/products.json';

interface ProductData {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number,
  quantity: number,
}

interface GlobalContextData {
  listOfProducts: ProductData[],
  displayCart: boolean,
  handleDisplayCart: () => void,
  cartList: ProductData[],
  addToCart: (product: ProductData) => void,
  handleProductQuantity: (newQuantity: number, productId: number) => void,
}

interface GlobalProviderData {
  children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalProvider({ children }: GlobalProviderData) {
  const [listOfProducts] = useState(products);
  const [displayCart, setDisplayCart] = useState(false);
  const [cartList, setCartList] = useState([] as ProductData[]);

  function handleDisplayCart() {
    setDisplayCart(!displayCart);
  }

  function addToCart(product: ProductData) {
    let productYetInCart: boolean = false;
    const newCart: ProductData[] = cartList;

    if (newCart.length !== 0) {
      newCart.forEach(({ id }) => {
        if (product.id === id) {
          product.quantity += 1;
          productYetInCart = true;
        }
      })
    }
    if (!productYetInCart) {
      newCart.push(product);
    }

    setCartList(newCart);
  }

  function handleProductQuantity(newQuantity: number, productId: number) {
    console.log('aa');
    const newCart: ProductData[] = cartList;
    newCart.forEach(({ id }, index) => {
      if (id === productId) newCart[index].quantity = newQuantity;
    })
    setCartList(newCart);
  }

  return (
    <GlobalContext.Provider
      value={{
        listOfProducts,
        displayCart,
        handleDisplayCart,
        cartList,
        addToCart,
        handleProductQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider >
  )
}
