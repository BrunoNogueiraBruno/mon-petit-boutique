import styles from '../styles/components/ProductCard.module.css';

interface ProductData {
  list: {
    id: number,
    name: string,
    image: string,
    price: number
  }
}
export default function ProductCard({ list }: ProductData) {
  const { id, name, image, price } = list;
  return (
    <div className={styles.productCardContainer}>
      <img src={image} alt={`product-${id}`} />
      <div>
        <h2>{name}</h2>
        <b>{`R$ ${price}`}</b>
      </div>
    </div>
  )
};
