import { FC } from 'react';
import ProductListItem from '../product-list-item/ProductListItem';

import styles from './ProductsList.module.scss';


const ProductsList: FC = () => {

  return (
      <section className={styles.container}>
        <div className={styles.productsListContainer}>
            <ProductListItem/>
            <ProductListItem/>
            <ProductListItem/>
            <ProductListItem/>
        </div>
    </section>
  );
};

export default ProductsList;
