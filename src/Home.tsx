import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products-list/ProductsList";
import Map from './components/map/Map';

import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className="App">
        <Navbar/>
        <section className={styles.container}>
         <ProductsList />
         <Map />
        </section>
         </div>
    )
}

export default Home;