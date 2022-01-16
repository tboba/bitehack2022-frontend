import { debounce, TextField } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/store-hooks';
import { MapItem } from '../map/MapItem';
import ProductListItem from '../product-list-item/ProductListItem';

import styles from './ProductsList.module.scss';


const ProductsList: FC = () => {
  const posts = useAppSelector(state => state.posts.posts) || [];
  console.warn(posts)

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  }

  //   var searchText = event.target.value; // this is the search text
  //   if (this.timeout) clearTimeout(this.timeout);
  //   this.timeout = setTimeout(() => {
  //     setSearchTerm(searchText)
  //   }, 300);
  // };

  // const handleChange = (evt) => {
  //   debouncedSearch(evt.target.value);
  // };

  // const debouncedSearch = debounce(function (val) {
  //   setSearchTerm(val);
  // }, 1000);


  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     console.log(searchTerm)
  //     // Send Axios request here
  //   }, 3000)

  //   return () => clearTimeout(delayDebounceFn)
  // }, [searchTerm])

  return (
    <section className={styles.container}>
      <TextField id="outlined-basic" label="Search" variant="outlined" value={searchTerm} onChange={handleChange} />

      <div className={styles.productsListContainer}>

        {posts.map((post: MapItem) => <ProductListItem mapItem={post} />)}
      </div>
    </section>
  );
};

export default ProductsList;
