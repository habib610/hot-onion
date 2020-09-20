import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import CategoryItems from '../CatagoryItems/CategoryItems';
const useStyles = makeStyles(() => ({
    btnCenter:{
        textAlign:'center'
    }
  }));
  
const Category = () => {
    const classes = useStyles();
    const [food, setFood] = useState(fakeData)
    console.log(food)
    return (
        <div>
            <Container>
                <Box className={classes.btnCenter}>
                <Button>Breakfast</Button>
                <Button>Lunch</Button>
                <Button>Dinner</Button>
                </Box>
                <Box>
                    <Grid container>
                        <Grid items lg={4}>
                            <h1>hello grid one</h1>
                        </Grid>
                        <Grid items lg={4}>
                            <h1>hllo grid two</h1>
                        </Grid>
                        <Grid items lg={4}>
                            <h1>hllo grid two</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} justify="center">
                       
                        {
                    food.map(fd => <CategoryItems key={fd.id} items ={fd}></CategoryItems>)
                }
                     
                    
                    </Grid>
              
                </Box>
              
            </Container>
        </div>
    );
};

export default Category;