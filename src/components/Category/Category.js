import { Button, Container, Grid, makeStyles,} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import CategoryItems from '../CatagoryItems/CategoryItems';
import { red } from '@material-ui/core/colors';
import { UserContext } from '../../App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9
    //   marginTop: "20px"
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    foodIcon:{background: "red",
     borderRadius: '50px',
    padding: '10px',
    color: "#fff",
    fontSize: "16px"
    } ,
    logo: {
        height: "50px"
    },
    footer:{
        background: "black",
        margin: "20px 0",
        padding: " 20px  0px",
        color: "white"
    }
  }));
  
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
                <Grid container justify="center" spacing={3} style={{marginBottom: "20px"}}>
                    <Grid item>
                    <Button   color="secondary" onClick={() => setDisplay('breakfast')}>breakfast</Button>
                    </Grid>
                    <Grid item>
                <Button   onClick={() => setDisplay('lunch')}>lunch</Button>
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