import styles from '../ProductImage/ProductImage.module.scss';

const ProductImage = props => {

  return(
    <div className={styles.imageContainer}>
      <img className={styles.image} alt={props.alt} src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
  );
} 

export default ProductImage;