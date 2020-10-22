import { Box, Button, Container, Grid, makeStyles, TextField as Typograhpy, Typography } from '@material-ui/core';
import React from 'react';
import CartFood from './CartFood/CartFood';

const useStyles = makeStyles({
    root: {
        marginTop: '20vh',
        '& .MuiFormControl-root': {
            marginBottom:'10px',
            background: '#f5f5f5',
        },
        '& .MuiOutlinedInput-input':{
            padding:'15px 14px'
        },
    },
    titleUnderline:{
        marginBottom: '20px',
        borderBottom: '2px solid grey '
    }
    
});


const DeliveryDetail = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={12} md={5} >
                    <Box borderBottom={2} className={classes.titleUnderline} borderColor="primary">
                    <Typography  variant="h4"  color="secondary" gutterBottom >
                 Edit Delivery Details
                </Typography>
                    </Box>
                
                    <form >
                       
                        <Typograhpy name="" required fullWidth placeholder="Location Name" variant="outlined" color="secondary" value="Deliver to Door" >
                        </Typograhpy>
                        <Typograhpy name="" required fullWidth placeholder="Road No." variant="outlined" color="secondary" >
                        </Typograhpy>
                        <Typograhpy name="" required fullWidth placeholder="Flat, Suit or 
                        Floor" variant="outlined" color="secondary" >
                        </Typograhpy>
                        <Typograhpy name="" required fullWidth placeholder="Business Name" variant="outlined" color="secondary" >
                        </Typograhpy>
                        <Typograhpy name="" required fullWidth placeholder="Add Instructor a Name" variant="outlined" color="secondary" >
                        </Typograhpy>
                        
                        <Button color="secondary" fullWidth variant="contained" type="Submit" >Save and Continue</Button>
                    </form>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Typography component="h4">
                </Typography>
                </Grid>
                <Grid  sm={12} md={3} >
                    <Grid item style={{marginBottom: '20px'}}>
                    <Typography variant="body1" component="p"> From <b>Gulsan Plaza Resturant GPR</b>   </Typography>
                    <Typography>  Arriving In 20-40 min</Typography>
                    <Typography>107 Rd. No 8</Typography>
                    </Grid>

                    <CartFood></CartFood>

                    <Grid item container>
                    <Grid item container justify="space-between">
                    <Typography variant="body1" component="p"> Tax:  </Typography>
                    <Typography>10</Typography>
                    </Grid>
                    <Grid item container justify="space-between">
                    <Typography variant="body1" component="p"> Delivery Free::  </Typography>
                    <Typography>10</Typography>
                    </Grid>
                    <Grid item container justify="space-between">
                    <Typography variant="body1" component="p"> Total:  </Typography>
                    <Typography>10</Typography>
                    </Grid>
                    </Grid>
                    <Button variant="contained" color="secondary" disabled={true} fullWidth>Place Order</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DeliveryDetail;