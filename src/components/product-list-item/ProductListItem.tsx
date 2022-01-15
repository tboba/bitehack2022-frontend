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

import styles from './ProductListItem.module.scss';
import {Box, Button} from '@mui/material';
import { FC } from 'react';
import { MapItem } from '../map/MapItem';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ProductListItemProps {
  mapItem?: MapItem;
  canBeDeleted?: boolean;
}

const ProductListItem: FC<ProductListItemProps> = ({ canBeDeleted = false }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="194"
          image="https://mlv36vxt8ewe.i.optimole.com/-kj5tHQ-sLt5KVwi/w:720/h:720/q:75/rt:fill/g:sm/https://hiszpanskiesmaki.pl/wp-content/uploads/2020/08/Paella-mixta.jpg"
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
            <TimelapseOutlinedIcon />&nbsp;23:45
          </div>
        </Box>
      </Box>
      <CardContent className={styles.titleContainer}>
        <Typography variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" className={styles.descriptionContainer}>
          Lizard test as dsadsad sad saokdosak ods   asdasd sadsa
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.actionsContainer}>
        <div className={styles.badge} title={"Distance from your location"}>
          <LocationOnOutlinedIcon />&nbsp;150m
        </div>
        <div className={styles.badge} title={'Time since added'}>
          <AccessTimeOutlinedIcon />&nbsp;2d
        </div>
      </CardActions>
        {
            canBeDeleted ? <div className={styles.deleteButton}>
                <Button variant={"contained"} color={"error"}>Delete</Button>
            </div> : null
        }
    </Card >
  );
}

export default ProductListItem;