import { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import styles from '../styles/components/Register.module.css';

export default function Register() {
  const { setShowRegister } = useContext(GlobalContext);
  const [costumerName, setCostumerName] = useState('');
  const [costumerCPF, setCostumerCPF] = useState(0);
  const getCart: any = localStorage.getItem('cart');
  const cart = JSON.parse(getCart);

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerContent}>
        <button
          type="button"
          className={styles.removeBtn}
          onClick={() => setShowRegister(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </button>

        <div>
          <label htmlFor="costumer-input">
            Nome de Usuário
            <input
              onChange={(e) => setCostumerName(e.target.value)}
              id="costumer-input"
              type="text"
            />
          </label>
          <label htmlFor="costumer-input">
            CPF (somente números)
            <input
              onChange={(e) => setCostumerCPF(Number(e.target.value))}
              id="costumer-input"
              type="number"
            />
          </label>
          <button
            className={styles.sendBtn}
            onClick={() => {
              localStorage.setItem(
                `costumer-${costumerName}`,
                JSON.stringify({
                  name: costumerName,
                  cpf: costumerCPF,
                  order: cart,
                })
              )
              localStorage.removeItem('cart');
            }}
            type="button"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}
