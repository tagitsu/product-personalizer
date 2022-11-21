import Button from '../Button/Button';
import styles from '../ProductForm/ProductForm.module.scss';
import shortid from 'shortid';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = props => {

  return(
      <form onSubmit={e => props.addToCart(e)}>
        <OptionSize 
          key={shortid()}
          sizes={props.sizes}
          currentSize={props.currentSize}
          setCurrentSize={props.setCurrentSize}
        />
        <OptionColor
          key={shortid()}
          colors={props.colors}
          currentColor={props.currentColor}
          setCurrentColor={props.setCurrentColor}
        />
        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
  );
};

export default ProductForm;