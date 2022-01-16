import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';

import styles from './ProductListItem.module.scss';
import { Box, Button } from '@mui/material';
import { FC, useState } from 'react';
import { MapItem } from '../map/MapItem';
import Countdown, { zeroPad } from 'react-countdown';
import { Link } from 'react-router-dom';


interface ProductListItemProps {
  mapItem?: MapItem;
  canBeDeleted?: boolean;
}

const Completionist = () => <span>Expired</span>;

export interface TimeProps {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
  days: number;
}


const ProductListItem: FC<ProductListItemProps> = ({ canBeDeleted = false, mapItem }) => {
  const [currentLatitude, setCurrentLatitude] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();


  const renderer = ({ days, hours, minutes, seconds, completed }: TimeProps) => {

    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{days > 0 && `${days}d`} {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }
  };


  let firstDate = new Date(mapItem?.creationDate || ''),
    secondDate = new Date(mapItem?.expiryDate || ''),
    firstDateInSeconds = firstDate.getTime() / 1000,
    secondDateInSeconds = secondDate.getTime() / 1000,
    difference = Math.abs(firstDateInSeconds - secondDateInSeconds);


  // console.warn(mapItem?.creationDate, mapItem?.expiryDate)
  if (difference < 60) {
    console.warn(difference + ' seconds');
  } else if (difference < 3600) {
    console.warn(Math.floor(difference / 60) + ' minutes');
  } else if (difference < 86400) {
    console.warn(Math.floor(difference / 3600) + ' hours');
  } else {
    console.warn(Math.floor(difference / 86400) + ' days');
  }

  const getDateDifference = () => {
    let firstDate = new Date(mapItem?.creationDate || ''),
      secondDate = new Date(),
      firstDateInSeconds = firstDate.getTime() / 1000,
      secondDateInSeconds = secondDate.getTime() / 1000,
      difference = Math.abs(firstDateInSeconds - secondDateInSeconds);
    if (difference < 60) {
      return difference + ' seconds';
    } else if (difference < 3600) {
      return Math.floor(difference / 60) + ' minutes';
    } else if (difference < 86400) {
      return Math.floor(difference / 3600) + ' hours';
    } else {
      return Math.floor(difference / 86400) + ' day';
    }

  }

  const coordinates = { lat: 52.40050890143135, lng: 16.909968708057384 };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => showPosition(pos));
  }

  function showPosition(position: any) {
    setCurrentLatitude(position.coords.latitude);
    setCurrentLongitude(position.coords.longitude);
  }

  const measureDistance = (lat1?: number, lon1?: number, lat2?: number, lon2?: number) => {  // generally used geo measurement function
    if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.floor(d * 1000);
  }

  console.warn('rerender')

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/details/${mapItem && mapItem.id}`}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="194"
            image={mapItem?.imageUrl}
            alt="Paella dish"
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div className={styles.badge} title={'Time left'}>
              <TimelapseOutlinedIcon />&nbsp;<Countdown
                date={mapItem?.expiryDate}
                renderer={renderer}
              />
            </div>
          </Box>
        </Box>
        <CardContent className={styles.titleContainer}>
          <Typography variant="h6" component="div">
            {mapItem?.title}
          </Typography>
          <Typography variant="body2" className={styles.descriptionContainer}>
            {mapItem?.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={styles.actionsContainer}>
          <div className={styles.badge} title={"Distance from your location"}>
            <LocationOnOutlinedIcon />&nbsp;{measureDistance(mapItem?.location?.latitude, mapItem?.location?.longitude, currentLatitude, currentLongitude)}m
          </div>
          <div className={styles.badge} title={'Time since added'}>
            <AccessTimeOutlinedIcon />&nbsp;{getDateDifference()}
          </div>
        </CardActions>
        {
          canBeDeleted ? <div className={styles.deleteButton}>
            <Button variant={"contained"} color={"error"}>Delete</Button>
          </div> : null
        }
      </Link>
    </Card >
  );
}

export default ProductListItem;