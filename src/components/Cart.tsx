import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import styles from "../styles/components/Cart.module.css";
import Register from './Register';

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
export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { showRegister, setShowRegister } = useContext(GlobalContext);
  const getCart: any = localStorage.getItem('cart');
  const cart = JSON.parse(getCart);

  useEffect(() => {
    if (getCart !== null) {
      const listOfPrices: number[] = [];
      cart.forEach(({ product }: ProductData) => {
        listOfPrices.push(Number(product.price * product.quantity));
      })
      const sum = listOfPrices.reduce((acc, cur) => acc + cur, 0);
      setTotalPrice(Number(sum + totalPrice));
    }
  }, [getCart]);

  return (
    <div>
      {
        showRegister && (
          <Register />
        )
      }
      <section className={styles.cartContainer}>

        <div className={styles.productsDisplay}>
          {
            getCart !== null && (
              cart.map(({ product }: ProductData, index: number) => {

                return (
                  <div className={styles.card} key={product.id}>
                    <div>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <h3>{product.name}</h3>
                      </div>
                      <label className={styles.productQuantity} htmlFor={`product-quantity-${product.id}`}>
                        {`unidade${product.id === 1 ? '' : 's'}`}
                        <input
                          value={product.quantity}
                          onChange={(e) => {
                            const value: number = parseInt(e.target.value);
                            cart[index].product.quantity = value;
                            localStorage.setItem("cart", JSON.stringify(cart));
                          }}
                          min="1"
                          type="number"
                          id={`product-quantity-${product.id}`}
                        />
                      </label>
                    </div>

                    <div>
                      <div className={styles.displayPrice}>
                        {`Preço: R$ ${(product.price * product.quantity).toFixed(2)}`}
                      </div>
                      <button
                        className={styles.removeBtn}
                        onClick={() => {
                          if (product.quantity > 1) {
                            cart[index].product.quantity -= 1
                          } else {
                            cart.splice(index, 1);
                          }
                          localStorage.setItem("cart", JSON.stringify(cart));
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
        <div className={styles.totalDisplay}>
          {`Valor Total: R$ ${totalPrice.toFixed(2)}`}
        </div>
        <button
          type="button"
          className={styles.finishBtn}
          onClick={() => setShowRegister(!showRegister)}
        >
          Finalizar Compra
        </button>
      </section>
    </div>
  )
}
