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
  setShowRegister: any
}

interface GlobalProviderData {
  children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalProvider({ children }: GlobalProviderData) {
  const [listOfProducts] = useState(products);
  const [displayCart, setDisplayCart] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  function handleDisplayCart() {
    setDisplayCart(!displayCart);
  }

  return (
    <GlobalContext.Provider
      value={{
        listOfProducts,
        displayCart,
        handleDisplayCart,
        showRegister,
        setShowRegister,
      }}
    >
      {children}
    </GlobalContext.Provider >
  )
}
