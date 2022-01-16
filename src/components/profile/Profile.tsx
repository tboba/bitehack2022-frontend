import React from "react";
import Navbar from "../navbar/Navbar";
import FaceIcon from '@mui/icons-material/Face';

import styles from "./Profile.module.scss"
import ProductListItem from "../product-list-item/ProductListItem";
import ProductsList from "../products-list/ProductsList";
import { MapItem } from "../map/MapItem";
import { useAppSelector } from "../../store/store-hooks";

const Profile = () => {
    const posts = useAppSelector(state => state.posts.posts) || [];

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
                {posts.map((post: MapItem) => <ProductListItem mapItem={post} canBeDeleted={true} />)}
            </div>
        </div>
    );
}

export default Profile;