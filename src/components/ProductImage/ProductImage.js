import styles from './ProductImage.module.scss'

const ProductImage = props => (
  <div className={styles.imageContainer}>
    <img className={styles.image} alt={props.alt} src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
  </div>
);

export default ProductImage;