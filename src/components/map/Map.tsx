import { createRef, FC, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './Map.module.scss';
import { MapItem, Location } from "./MapItem";
import { Paper, Typography } from "@mui/material";
import { useAppSelector } from '../../store/store-hooks';

interface MarkerProps {
    item: MapItem;
    lat: number;
    lng: number;
}

interface MapProps {
    items: MapItem[];
}

const Marker: FC<MarkerProps> = ({ item }) => {
    const defaultUrl: string = "https://a.allegroimg.com/original/11a642/3ff8b8b64645b4ea9d396943d88c/OSIOL-COLLECTA";

    return (
        <div className={styles.markerContainer} >
            <Paper elevation={3} className={styles.markerContent}>
                <Typography className={styles.markerTitle} variant={"subtitle1"} gutterBottom>
                    {item.title}
                </Typography>
                <img className={styles.markerImage}
                    src={item.imageUrl ? item.imageUrl : defaultUrl}
                    alt={item.title}
                />
            </Paper>
        </div>
    );
}

const Map: FC<MapProps> = ({ items }) => {
    // GET CURRENT LOCATION
    // const coordinates = { lat: 50.0466814, lng: 19.8647899 };
    const [coordinates, setCoordinates] = useState({ lat: 50.0680363, lng: 19.906108 })
    const posts = useAppSelector(state => state.posts.posts) || [];
    const markers = posts.map(post => post.location);
    console.warn(markers);



    // use default algorithm and renderer
    // const markerCluster = new MarkerClusterer({ map, markers });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => showPosition(pos));
    }

    function showPosition(position: any) {
        console.warn(position.coords.latitude, position.coords.longitude)
        setCoordinates({ lat: position.coords.latitude, lng: position.cooords.longitude })
    }

    const mappedPlaces = posts.map((item) => {
        return (
            <Marker
                item={item}
                lat={item.location.latitude}
                lng={item.location.longitude}
            />
        );
    });

    return (
        <div className={styles.mapContainer}>
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{ key: 'AIzaSyAPjaMdeqXnLNpwS6uXha3duczlHZDIlT8' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true }}
            >
                {mappedPlaces}
            </GoogleMapReact>
        </div>
    )
}

export default Map;