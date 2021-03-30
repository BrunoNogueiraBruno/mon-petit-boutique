import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import styles from '../styles/components/ProductCard.module.css';
interface Product {
  id: number,
  name: string,
  image: string,
  price: number,
  description: string,
  quantity: number,
}

interface ProductData {
  product: Product,
}

export default function ProductCard({ product }: ProductData) {
  const { productsInCart, updateProductsInCart } = useContext(GlobalContext);
  const { id, name, image, price, description } = product;
  const getCart: any = localStorage.getItem('cart');
  const cart = JSON.parse(getCart);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  function returnQuantityToZero() {
    if (getCart !== null) {
      const listOfIds: number[] = [];
      cart.forEach(({ product }: ProductData) => {
        listOfIds.push(product.id);
      })
      if (!listOfIds.includes(id)) setCurrentQuantity(0);
    }
  }

  function getQuantity() {
    if (getCart !== null) {
      cart.forEach(({ product }: ProductData) => {
        if (product.id === id) {
          setCurrentQuantity(product.quantity);
        }

      })
    }
  }

  useEffect(() => {
    getQuantity();
    returnQuantityToZero();
  }, [productsInCart]);

  function showQuantity(id: number) {
    if (currentQuantity >= 1) {
      return (
        <div className={styles.displayCurrQuantity}>
          {currentQuantity}
        </div>
      )
    }
  }

  function getLocalStorage() {
    if (getCart !== null) {
      let productYetInCart = false;
      cart.forEach(({ product: currProduct }: ProductData, index: number) => {

        if (product.id === currProduct.id) {
          cart[index].product.quantity += 1;
          productYetInCart = true;
        }
      })
      if (!productYetInCart) {
        cart.push({ product });
      };

      localStorage.setItem('cart', JSON.stringify(cart));

      updateProductsInCart(cart);

    } else {

      const cart: ProductData[] = [{ product }];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateProductsInCart(cart);
    }
  }

  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCardContent}>
        <img src={image} alt={`product-${id}`} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <b>{`R$ ${price}`}</b>
        </div>
      </div>

      <button
        className={styles.addToCartBtn}
        type="button"
        onClick={() => {
          getLocalStorage();
        }}
      >
        {showQuantity(id)}
        +
      </button>

    </div >
  )
};
