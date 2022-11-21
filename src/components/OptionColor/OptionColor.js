import styles from '../ProductForm/ProductForm.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionColor = props => {
  
  const prepareColorName = color => {
    return(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]);
  };
  
  console.log('props.colors', props.colors);
  console.log('props.currentColor', props.currentColor);
  return(
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color => <li key={shortid()}><button type="button" onClick={() => props.setCurrentColor(color)} className={clsx(prepareColorName(color), props.currentColor === color && styles.active)} /></li>)}
      </ul>
    </div>
  );
};

export default OptionColor;