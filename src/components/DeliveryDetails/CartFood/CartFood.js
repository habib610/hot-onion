import { Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartFood = () => {
    return (
        <Grid style={{background: '#bab5b587', borderRadius: '10px', padding: '10px 0px', marginBottom: '20px'}} item container >
        <Grid item sm={4} md={4}>
            <img width="100" src="https://iili.io/2TCWeR.md.png" alt=""/>
        </Grid>
        <Grid item sm={3} md={3}>
            <Typography >Butter nun</Typography>
            <Typography variant="h4" color="secondary">$40</Typography>
            <Typography variant="subtitle2" color="textSecondary">Delivery Free</Typography>
        </Grid>
        <Grid item container sm={5} md={5} alignItems="center">
            <Grid item sm={4}>
              <IconButton>
                <RemoveIcon
                ></RemoveIcon>
              </IconButton>
            </Grid>
            <Grid item sm={4} >
                <p style={{textAlign: 'center'}}>5</p>
            </Grid>
            <Grid item sm={4}>
              <IconButton>
                <AddIcon

                  color="secondary"
                />
              </IconButton>
            </Grid>

        </Grid>
        </Grid>
    );
};

export default CartFood;