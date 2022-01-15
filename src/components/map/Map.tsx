import { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import MoreIcon from '@mui/icons-material/MoreVert';

import styles from './Map.module.scss';

interface MarkerProps {
  lat: number;
  lng: number;
}

const Marker: FC<MarkerProps> = (props) => <div><MoreIcon/></div>;

const Map: FC = () => {

    const coordinates = { lat: 0, lng : 0};
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
          <Marker
              lat={59.955413}
              lng={30.337844} 
            />
            <Marker
              lat={0}
              lng={0} 
            />
        </GoogleMapReact>
      </div>
    )
}

export default Map;