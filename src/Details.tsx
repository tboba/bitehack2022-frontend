import Navbar from "./components/navbar/Navbar";
import Map from './components/map/Map';
import { items } from "./Home";

import styles from './Details.module.scss';
import ProductDetails from "./components/product-details/ProductDetails";

const Details = () => {
    return (
        <div className="App">
            <Navbar />
            <section className={styles.container}>
                <ProductDetails />
                <Map items={items} />
            </section>
        </div>
    )
}

export default Details;