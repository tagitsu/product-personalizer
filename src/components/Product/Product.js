import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import shortid from 'shortid';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getPrice = (currentSize) => { 
    return(currentSize.additionalPrice + props.basePrice);
  };

  const addToCart = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('~~~~~~~~~');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice(currentSize),'$');
    console.log('Size: ', currentSize.name);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
        <ProductImage 
          key={shortid()}
          name={props.name} 
          alt={props.title} 
          currentColor={currentColor} 
        />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(currentSize)}$</span>
        </header>
        <ProductForm 
          key={shortid()}
          sizes={props.sizes}
          colors={props.colors}
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
          addToCart={addToCart}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;