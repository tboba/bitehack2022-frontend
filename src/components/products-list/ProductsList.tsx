import {debounce, TextField} from '@mui/material';
import {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store-hooks';
import {MapItem} from '../map/MapItem';
import ProductListItem from '../product-list-item/ProductListItem';

import styles from './ProductsList.module.scss';
import axios from "axios";
import {fetchPosts} from "../../store/postsSlice";


const ProductsList: FC = () => {
    const posts = useAppSelector(state => state.posts.posts) || [];
    const dispatch = useAppDispatch()

    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    }

    /*useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [searchTerm]);

    useEffect(() => {
        const doSearch = async () => {
            const json = await fetch(`http://localhost:8080/api/posts${debouncedTerm && `?name=${debouncedTerm}`}`)
                .then(res => res.json())
                .then(json => {
                    return dispatch(fetchPosts(json.content))
                });

            setDebouncedTerm("");
        }

        doSearch();
    }, [searchTerm, debouncedTerm]);*/

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
            <TextField id="outlined-basic" label="Search" variant="outlined" value={searchTerm}
                       onChange={handleChange}/>

            <div className={styles.productsListContainer}>

                {posts.map((post: MapItem) => <ProductListItem mapItem={post}/>)}
            </div>
        </section>
    );
};

export default ProductsList;
