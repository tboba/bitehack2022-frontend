import Navbar from "./components/navbar/Navbar";
import Map from './components/map/Map';
import data from "./data";

import styles from './Details.module.scss';
import ProductDetails from "./components/product-details/ProductDetails";

import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MapItem } from "./components/map/MapItem";

const Details = (props: any) => {
    const params = useParams();
    const [postDetails, setDetails] = useState<MapItem>();
    // const posts = useAppSelector((state) => state.posts)
    // const dispatch = useAppDispatch()
    console.warn(params.id)

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${params.id}`)
            .then(res => res.json())
            .then(json => {
                console.warn('test', json);
                setDetails(json);
            });
    }, [])

    return (
        <div className="App">
            <Navbar />
            <section className={styles.container}>
                <ProductDetails mapItem={postDetails} />
                <Map items={data} customCoords={{ lat: postDetails?.location.latitude || 0, lng: postDetails?.location.longitude || 0 }} />
            </section>
        </div>
    )
}

export default Details;