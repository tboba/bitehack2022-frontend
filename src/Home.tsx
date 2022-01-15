import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products-list/ProductsList";
import Map from './components/map/Map';

import styles from './Home.module.scss';
import { MapItem } from "./components/map/MapItem";

const items: MapItem[] = [
    {
        id: 1,
        title: "1",
        description: "ELO ELO ELO ELO",
        creationDate: new Date(),
        expiryDate: new Date(),
        imageUrl: "",
        location: {
            latitude: 50.015033,
            longitude: 19.901099
        }
    },
    {
        id: 2,
        title: "2",
        description: "ELO ELO ELO ELO",
        creationDate: new Date(),
        expiryDate: new Date(),
        imageUrl: "",
        location: {
            latitude: 50.013581,
            longitude: 19.928383
        }
    },
    {
        id: 3,
        title: "3",
        description: "ELO ELO ELO ELO",
        creationDate: new Date(),
        expiryDate: new Date(),
        imageUrl: "",
        location: {
            latitude: 50.023654,
            longitude: 19.910747
        }
    },
    {
        id: 4,
        title: "4",
        description: "ELO ELO ELO ELO",
        creationDate: new Date(),
        expiryDate: new Date(),
        imageUrl: "",
        location: {
            latitude: 50.007543,
            longitude: 19.894312
        }
    }
];

const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <section className={styles.container}>
                <ProductsList />
                <Map items={items} />
            </section>
         </div>
    )
}

export default Home;