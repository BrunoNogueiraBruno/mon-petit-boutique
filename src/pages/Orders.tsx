import styles from '../styles/pages/Orders.module.css';
import Header from '../components/Header';
import { useState } from 'react';

interface ProductData {
  product: {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
  }
}

export default function Orders() {
  const getCostumers: any = localStorage.getItem('list-costumers')
  const costumers = JSON.parse(getCostumers)
  const [costumerName, setCostumerName] = useState('');

  function getCostumersList() {
    const ordersList: any = [];
    if (getCostumers !== null) {
      costumers.forEach((costumer: any) => {
        if ((costumer.name).toLowerCase().includes(costumerName.toLowerCase())) {
          ordersList.push(
            <div
              key={`costumer-${costumer.name}`}
              className={styles.costumer}
            >
              <h2>{costumer.name}</h2>
              <div>
                {costumer.order.map(({ product }: ProductData) => {

                  return (
                    <div key={`product-${product.id}`} className={styles.products}>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <h3>{`${product.quantity}x ${product.name}`}</h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      })
    }
    return ordersList;
  }

  return (
    <div className={styles.ordersContainer}>
      <Header />
      <div className={styles.ordersContent}>
        <h1>Pedidos</h1>
        <label htmlFor="search-costumer" className={styles.search}>
          Pesquisa por cliente
          <input
            onChange={(e) => setCostumerName(e.target.value)}
            id="search-costumer"
          />
        </label>
        <div className={styles.costumersDisplay}>
          {getCostumersList()}
        </div>
      </div>
    </div>
  )
}
