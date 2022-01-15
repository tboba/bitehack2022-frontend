import React from "react";
import Navbar from "../navbar/Navbar";
import FaceIcon from '@mui/icons-material/Face';

import styles from "./Profile.module.scss"
import ProductListItem from "../product-list-item/ProductListItem";
import ProductsList from "../products-list/ProductsList";

const Profile = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.info}>
                <FaceIcon className={styles.avatarIcon}/>
                <div className={styles.accountInfo}>
                    <h2>Michal Dros</h2>
                    <h3>test@test.com</h3>
                </div>
            </div>
            <div className={styles.items}>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
                <ProductListItem canBeDeleted={true}/>
            </div>
        </div>
    );
}

export default Profile;