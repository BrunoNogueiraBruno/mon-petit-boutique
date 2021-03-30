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
  showRegister: boolean,
  setShowRegister: any,
  productsInCart: ProductData[],
  updateProductsInCart: any,
}

interface GlobalProviderData {
  children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalProvider({ children }: GlobalProviderData) {
  const [listOfProducts] = useState(products);
  const [displayCart, setDisplayCart] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);

  function handleDisplayCart() {
    setDisplayCart(!displayCart);
  }

  function updateProductsInCart(list: any) {
    setProductsInCart(list);
  }

  return (
    <GlobalContext.Provider
      value={{
        listOfProducts,
        displayCart,
        handleDisplayCart,
        showRegister,
        setShowRegister,
        productsInCart,
        updateProductsInCart,
      }}
    >
      {children}
    </GlobalContext.Provider >
  )
}
