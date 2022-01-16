import { FC } from 'react';
import { useAppSelector } from '../../store/store-hooks';
import { MapItem } from '../map/MapItem';
import ProductListItem from '../product-list-item/ProductListItem';

import styles from './ProductsList.module.scss';


const ProductsList: FC = () => {
  const posts = useAppSelector(state => state.posts.posts) || [];
  console.warn(posts)
  return (
    <section className={styles.container}>
      <div className={styles.productsListContainer}>

        {posts.map((post: MapItem) => <ProductListItem mapItem={post} />)}
      </div>
    </section>
  );
};

export default ProductsList;
