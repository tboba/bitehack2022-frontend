import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Grid } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import styles from './Navbar.module.scss';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  let navigate = useNavigate();
  let loggedInValue = localStorage.getItem('loggedIn')

  console.warn('loggedIn', loggedInValue)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileClick = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  const onLogout = () => {
    localStorage.setItem('loggedIn', "false");
    navigate('/');
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          component={RouterLink} to={"/profile/1"}
        >
          <HomeIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <RouterLink
            className={styles.logo}
            aria-label="open drawer"
            to={"/"}
          >
            BITEShare
          </RouterLink>

          <Grid container justifyContent="flex-end" color={"inherit"}>
            <Button
              component={RouterLink}
              to={"/profile/1/addProduct"}
              variant={"contained"}
              color={"warning"}
              className={styles.signInButton}
            >
              <AddCircleOutlineIcon className={styles.plusIcon} />
              Add post
            </Button>
            {(!loggedInValue || loggedInValue === 'false') && (
              <>
                <Button
                  component={RouterLink}
                  to={"/signIn"}
                  variant={"contained"}
                  color={"info"}
                  className={styles.signInButton}
                >
                  Sign in
                </Button>
                <Button
                  component={RouterLink}
                  to={"/signUp"}
                  variant={"contained"}
                  color={"secondary"}
                  className={styles.signInButton}
                >
                  Sign up
                </Button>
              </>)
            }
            {loggedInValue === 'true' && <Button
              variant={"contained"}
              color={"secondary"}
              className={styles.signInButton}
              onClick={onLogout}
            >
              Logout
            </Button>}
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
          {loggedInValue === 'true' &&
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                component={RouterLink} to={"/profile/1"}
              >
                <AccountCircle />
              </IconButton>
            </Box>
          }

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box >
  );
}