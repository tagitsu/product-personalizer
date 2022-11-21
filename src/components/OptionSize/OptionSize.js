import styles from '../ProductForm/ProductForm.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionSize = props => (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => <li key={shortid()}><button type="button" onClick={() => props.setCurrentSize(size)} className={clsx(styles.sizes, props.currentSize.name === size.name && styles.active)}>{size.name}</button></li>)}
      </ul>
    </div>
  );

export default OptionSize;