import { useState } from 'react';
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
  const { id, name, image, price, description } = product;

  function getLocalStorage() {
    const getCart: any = localStorage.getItem('cart');
    if (getCart !== null) {
      const cart = JSON.parse(getCart);
      let productYetInCart = false;
      cart.forEach(({ product: currProduct }: ProductData, index: number) => {

        if (product.id === currProduct.id) {
          cart[index].product.quantity += 1;
          productYetInCart = true;
        }
      })
      if (!productYetInCart) cart.push({ product });

      localStorage.setItem('cart', JSON.stringify(cart));

    } else {
      const cart: ProductData[] = [{ product }];
      localStorage.setItem('cart', JSON.stringify(cart));
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
        +
      </button>

    </div >
  )
};
