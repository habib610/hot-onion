import { Button, Container, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    input: {
        marginBottom: "10px"
    },
    logo:{
        height: '50px',
        marginBottom: '40px'
    }
})
const Login = () => {
    const classes = useStyles();
    return (
        <Container style={{textAlign: 'center'}}>
            
            <Grid container justify="center" spacing={2}>
                <Grid items sm={12} md={4}>
                <h1>Login Page</h1>
                <img className={classes.logo} src="https://iili.io/2To1HJ.png" alt=""/>
                <TextField  className={classes.input} fullWidth placeholder="Your Name" variant="outlined" color="secondary" >
                </TextField>
                <TextField className={classes.input} fullWidth placeholder="Your Email" variant="outlined" color="secondary" type="email">
                </TextField>
                <TextField  className={classes.input} fullWidth placeholder="Password" variant="outlined" color="secondary" type="password">
                </TextField>
                <TextField className={classes.input} fullWidth placeholder="Confirm Password" variant="outlined" color="secondary" type="password">
                </TextField>
                <Button color="secondary" fullWidth variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;