import React from "react";
import Navbar from "../navbar/Navbar";
import FaceIcon from '@mui/icons-material/Face';

import styles from "./Profile.module.scss"
import ProductListItem from "../product-list-item/ProductListItem";
import ProductsList from "../products-list/ProductsList";
import { MapItem } from "../map/MapItem";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import { fetchPosts } from "../../store/postsSlice";

const Profile = () => {
    const posts = useAppSelector(state => state.posts.posts) || [];
    const dispatch = useAppDispatch()
    const refetch = () => {
        fetch("http://localhost:8080/api/posts")
            .then(res => res.json())
            .then(json => {
                return dispatch(fetchPosts(json.content))
            });
    }

    return (
        <div>
            <Navbar />
            <div className={styles.info}>
                <FaceIcon className={styles.avatarIcon} />
                <div className={styles.accountInfo}>
                    <h2>John Doe</h2>
                    <h3>johndoe@gmail.com</h3>
                </div>
            </div>
            <div className={styles.items}>
                {posts.map((post: MapItem) => <ProductListItem mapItem={post} canBeDeleted={true} clickedTrigger={refetch} />)}
            </div>
        </div>
    );
}

export default Profile;