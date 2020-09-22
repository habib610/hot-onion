import { Button, Container, Grid, IconButton, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserContext } from '../../App';
// import { UserContext } from '../Header/Header';

const FoodDetails = () => {
    const [cart, setCart] = useContext(UserContext);
    const {foodId} = useParams();
    const foodMoreDetails = fakeData.find(pd =>pd.id === foodId);
    const  {name, details, photo, price} = foodMoreDetails;
    const [count, setCount] = useState(1)

    return (
        <Container>
               <Grid container justify="center" spacing={3} style={{marginBottom: "20px"}}>
                    <Grid item>
                  <Link to="/home"><Button  >breakfast</Button></Link>  
                    </Grid>
                    <Grid item>
              <Link to="/home"> <Button   >lunch</Button></Link> 
                   </Grid>
                    <Grid item>
                    <Link to="/home"><Button >dinner</Button></Link>
                    </Grid>
                </Grid>
            <Grid container>
                <Grid items sm={12} md={5}>
                    <Typography variant="h2" color="secondary">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="TextSecondary">
                        {details}
                    </Typography>
                    <Typography variant="h3" color="secondary">
                       ${price}
                    </Typography>
                    <Grid container alignItems="center" spacing={false}>
                        
                        <Grid items sm={1}> <IconButton><RemoveIcon onClick={()=> setCount(count-1)} color="secondary"></RemoveIcon></IconButton></Grid>
    <Grid items sm={1}><h3 style={{textAlign: 'center'}}>{count}</h3></Grid>
                        <Grid items sm={1}> <IconButton><AddIcon onClick={()=> setCount(count+1), ()=> setCart(cart+ 1)} color="secondary"/></IconButton></Grid>
    
                    </Grid>
                    <Grid><Button variant="contained" color="secondary"><ShoppingCartIcon/>Add</Button></Grid>
                    <h2>Cart: {cart}</h2>
                </Grid>
                <Grid items sm={12} md={7}>
                    <img src={photo} alt=""/>
                </Grid>
            </Grid>
              
               
            
        </Container>
    );
};

export default FoodDetails;