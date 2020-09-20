import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import CategoryItems from '../CatagoryItems/CategoryItems';
const useStyles = makeStyles(() => ({
    btnCenter:{
        textAlign:'center'
    },
    grid: {
        backgroundColor: 'red'
    }
  }));
  
const Category = () => {
    const classes = useStyles();
    

    const [food, setFood] = useState(fakeData.slice(0,6))

    const [cat, setCat] = useState('breakfast')

    const handleClicked =(e)=>{
        const tabBtnValue = e.target.innerHTML;
        setCat(tabBtnValue)
        const currentlyShowing = fakeData.filter(fod => fod.category === cat);
        setFood(currentlyShowing)
    }
    // console.log(cat)


    return (
<>                     
       <Container>
                <Box className={classes.btnCenter}>
                <Button color="secondary" spacing={2} variant="contained" onClick={handleClicked}>breakfast</Button>

                <Button variant="contained" onClick={handleClicked}>lunch</Button>
                <Button variant="contained" onClick={handleClicked}>dinner</Button>
                </Box>
              
                 
                    <Grid container spacing={4} justify="center">
                       
                        {
                    food.map(fd => <CategoryItems key={fd.id} item ={fd}></CategoryItems>)
                }
                    </Grid>

                    </Container>
            </>
    );
};

export default Category;