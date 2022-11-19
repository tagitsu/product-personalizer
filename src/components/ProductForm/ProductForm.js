import Button from '../Button/Button';
import styles from '../ProductForm/ProductForm.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';


const ProductForm = props => {

  const prepareColorName = color => {
    return(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]);
  };

  return(
      <form onSubmit={e => props.addToCart(e)}>
        <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>
            {props.sizes.map(size => <li key={shortid()}><button type="button" onClick={() => props.setCurrentSize(size)} className={clsx(styles.sizes, props.currentSize.name === size.name && styles.active)}>{size.name}</button></li>)}
          </ul>
        </div>
        <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
            {props.colors.map(color => <li key={shortid()}><button type="button" onClick={() => props.setCurrentColor(color)} className={clsx(prepareColorName(color), props.currentColor === color && styles.active)} /></li>)}
          </ul>
        </div>
        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
  );
};

export default ProductForm;