import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import styles from '../styles/components/Header.module.css';

export default function Header() {
  const { displayCart, handleDisplayCart } = useContext(GlobalContext);

  return (
    <header className={styles.headerContainer}>
      <div>
        <div>
          <img
            className={styles.franceFlag}
            src="/images/france-flag.png"
            alt="Bandeira da França"
          />
          <h1>Mon Petit Boutique</h1>
        </div>

        <button
          type="button"
          onClick={() => handleDisplayCart()}
        >
          {!displayCart ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
};
