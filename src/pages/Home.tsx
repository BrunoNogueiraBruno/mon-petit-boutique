import { useContext } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import ProductsDisplay from "../components/ProductsDisplay";
import { GlobalContext } from "../contexts/GlobalContext";
import styles from "../styles/pages/Home.module.css";

function Home() {
  const { displayCart } = useContext(GlobalContext);
  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.homeContent}>
        <ProductsDisplay />
        {displayCart && <Cart />}
      </div>
    </div>
  )
};

export default Home;
