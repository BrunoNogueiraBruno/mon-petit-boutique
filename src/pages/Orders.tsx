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
  const [showDetails, setShowDetails] = useState(false);

  const getCart: any = localStorage.getItem('list-costumers');
  const listCostumers = JSON.parse(getCart);

  function getTotalValue(costumer: string) {
    const listOfPrices: number[] = [];
    listCostumers.forEach((eachCostumer: any) => {
      if (eachCostumer.name === costumer) {
        eachCostumer.order.forEach(({ product }: any) => {
          listOfPrices.push(product.price);
        })
      }

    })
    const sum = listOfPrices.reduce((acc: number, cur: number) => acc + cur, 0);

    return sum.toFixed(2);
  }

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
              {
                showDetails && (
                  <h3>{`Valor total: ${getTotalValue(costumer.name)}`}</h3>
                )
              }
              <button
                className={styles.detailsBtn}
                type="button"
                onClick={() => setShowDetails(!showDetails)}
              >
                {
                  !showDetails ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  ) : (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </div>
                  )
                }
              </button>
              <div>
                {costumer.order.map(({ product }: ProductData) => {

                  return (
                    <div key={`product-${product.id}`} className={styles.products}>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <h3>{product.name}</h3>
                      </div>

                      {
                        showDetails && (
                          <div>
                            <li>
                              <ul>{`Quantidade: ${product.quantity}`}</ul>
                              <ul>{`Valor unitário: ${product.price}`}</ul>
                              <ul><strong>{`Subtotal: ${(product.price * product.quantity).toFixed(2)}`}</strong></ul>
                            </li>
                          </div>
                        )
                      }
                    </div>
                  )
                })}
              </div>
            </div >
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
