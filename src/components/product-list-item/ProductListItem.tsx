import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';

import styles from './ProductListItem.module.scss';
import { Box } from '@mui/material';
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

export default function ProductListItem() {
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
    </Card >
  );
}