import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './ProductDetails.module.scss';
import { Box } from '@mui/material';
import { FC } from 'react';
import { MapItem } from '../map/MapItem';
import Countdown, { zeroPad } from 'react-countdown';
import { TimeProps } from '../product-list-item/ProductListItem';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
interface ProductDetailsProps {
    mapItem?: MapItem;
}

const Completionist = () => <span>Expired</span>;


const ProductDetails: FC<ProductDetailsProps> = ({ mapItem }) => {
    const [currentLatitude, setCurrentLatitude] = React.useState();
    const [currentLongitude, setCurrentLongitude] = React.useState();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => showPosition(pos));
    }

    function showPosition(position: any) {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
    }


    const renderer = ({ days, hours, minutes, seconds, completed }: TimeProps) => {

        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{days}d {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
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


    return (
        <Card className={styles.card}>
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
                        width: '95%',
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >

                    <Link to={`/`}>
                        <div className={styles.goBack} title={'Go Back'}>
                            <ArrowBackIcon />
                        </div>
                    </Link>
                    {/* <div className={styles.badge} title={'Time left'}>
                        <TimelapseOutlinedIcon />&nbsp; <Countdown
                            date={mapItem?.expiryDate || ''}
                            renderer={renderer}
                        />
                    </div> */}
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
            <CardContent className={styles.contactContainer}>
                <div>
                    <Typography variant="body2" className={styles.title}>
                        {mapItem?.author?.name}
                    </Typography>
                    <Typography variant="body2" className={styles.descriptionContainer}>
                        {mapItem?.author?.email}
                    </Typography>
                </div>
                <Typography variant="body2" className={styles.phoneNumber}>
                    <span><PhoneIcon className={styles.phoneIcon} />{mapItem?.author?.phoneNumber}</span>
                </Typography>
            </CardContent>
        </Card >
    );
}

export default ProductDetails;