import { Button, Container, Grid, makeStyles,} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import CategoryItems from '../CatagoryItems/CategoryItems';
import { red } from '@material-ui/core/colors';
import { UserContext } from '../../App';
import './Category.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


  
const Category = () => {

const [cart, setCart] = useContext(UserContext);





    const [food, setFood] = useState([])
    const [display, setDisplay] = useState('breakfast');

    useEffect(()=>{
        const currentlyShowing = fakeData.filter(fod => fod.category === display);
        setFood(currentlyShowing);

    },[display]);
    const handleClick =()=>{
      console.log("clicked")
    }




    return (

       <Container>
                <Grid container  justify="center" spacing={3} style={{marginBottom: "20px"}}>
                    <Grid item >
                    <Button  onClick={() => setDisplay('breakfast')}>breakfast</Button>
                    </Grid>
                    <Grid item>
                <Button  onClick={() => setDisplay('lunch')}>lunch</Button>
                    </Grid>
                    <Grid item>
                <Button    onClick={() => setDisplay('dinner')}>dinner</Button>
                    </Grid>
                </Grid>

{/* passing data to the child  */}
                    <Grid container spacing={4} >
                        {
                    food.map(fd => <CategoryItems  key={fd.id} item ={fd}></CategoryItems>)
                }
                    </Grid>
                    <Grid container justify="center" spacing={2} style={{margin: "20px"}}>
                    <Grid items >
                  <Button color="secondary" variant="contained" 
                       disabled={cart !== 0 ? false : true} onClick={handleClick}
                        ><Link style={{textDecoration: "none", color: "white"}} to={cart !== 0 ? "/login": "/home"} > Check Out Your Food </Link> </Button>     
                    </Grid>
                    </Grid>
                    </Container>
    )
};

export default Category;