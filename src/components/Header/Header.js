import React, { createContext, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { UserContext } from '../../App';
import {Link} from 'react-router-dom';
import { Badge } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo:{
      height: '60px',
      paddingTop: '10px'
  },

  hover: {
    borderRadius: "20px",
    padding: '7px 20px ',
    // marginLeft: '5px',
    '&:hover': {
        backgroundColor: '#f50057',
        color: '#fff',
    },
    cart:{
        marginRight: '10px'
    }
  },
}));

const Header=()=> {
const [cart, setCart] = useContext(UserContext);

  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
        <img className={classes.logo} src="https://iili.io/2To1HJ.png" alt=""/>
          </Typography>
          <Badge badgeContent={cart} color="primary">
          <ShoppingCartIcon  className={classes.cart} variant="contained" color="secondary"></ShoppingCartIcon>
          </Badge>
       <Link to="/login"><Button  className={classes.hover}>Login</Button></Link>
          <Button  className={classes.hover}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}
export default Header;