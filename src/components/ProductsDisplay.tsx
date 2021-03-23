import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "./ProductCard";
import styles from "../styles/components/ProductsDisplay.module.css";

export default function ProductsDisplay() {
  const { listOfProducts } = useContext(ProductsContext);

  function getCards() {
    const listOfCards: JSX.Element[] = [];

    listOfProducts.forEach((product) => {
      listOfCards.push(
        <ProductCard key={`product-${product.id}`} list={product} />
      )
    });

    return listOfCards;
  }

  return (
    <section className={styles.productsDisplayContainer}>
      {getCards()}
    </section>
  )
};
