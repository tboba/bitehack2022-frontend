import { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import MoreIcon from '@mui/icons-material/MoreVert';

import styles from './Map.module.scss';
import {MapItem} from "./MapItem";
import {Paper, Typography} from "@mui/material";

interface MarkerProps {
    item: MapItem;
    lat: number;
    lng: number;
}

interface MapProps {
    items: MapItem[];
}

const Marker: FC<MarkerProps> = ({item}) => {
    const defaultUrl: string = "https://a.allegroimg.com/original/11a642/3ff8b8b64645b4ea9d396943d88c/OSIOL-COLLECTA";

    return (
        <div className={styles.markerContainer} >
            <Paper elevation={3} className={styles.paper}>
                <Typography className={styles.typography} variant={"subtitle1"} gutterBottom>
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
    const coordinates = { lat: 52.40050890143135, lng: 16.909968708057384 };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => showPosition(pos));
    }

    function showPosition(position: any) {
        console.warn(position.coords.latitude, position.coords.longitude)
    }

    const mappedPlaces = items.map((item) => {
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