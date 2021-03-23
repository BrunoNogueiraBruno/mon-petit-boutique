import { createContext, useState, ReactNode } from "react";
import products from './data/products.json';

interface ProductData {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number
}

interface ProductsContextData {
  listOfProducts: ProductData[]
}

interface ProductsProviderData {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderData) {
  const [listOfProducts, setListOfProducts] = useState(products);

  return (
    <ProductsContext.Provider
      value={{
        listOfProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
