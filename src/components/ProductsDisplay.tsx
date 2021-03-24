import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import ProductCard from "./ProductCard";
import styles from "../styles/components/ProductsDisplay.module.css";

export default function ProductsDisplay() {
  const { listOfProducts } = useContext(GlobalContext);

  function getCards() {
    const listOfCards: JSX.Element[] = [];

    listOfProducts.forEach((product) => {
      listOfCards.push(
        <ProductCard key={`product-${product.id}`} product={product} />
      )
    });

    return listOfCards;
  }

  return (
    <section className={styles.productsDisplayContainer}>
      <div>
        {getCards()}
      </div>
    </section>
  )
};
