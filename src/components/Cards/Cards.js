import { Box, Button, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9

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
const Cards = () => {
    const classes = useStyles();
    return (
        <div>
            <Container>
            <Grid container>
                    <Grid item sm={12} md={4}>
                        <Typography variant="h4" >
                        Why Choose Us
                        </Typography>
                        <Typography variant="p" >
                        Barton waited twenty always repair in within we do. an delighted offending curiosity my is dash woods at. Boy prosperous increasing surrounded.
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid container style={{marginTop: '20px', marginBottom: "30px"}} gutterBottom>
                        <Grid item sm={12} md={4}>

                        <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://iili.io/2A67B1.md.png"
      />
      <CardContent>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
          <DirectionsBusIcon   className={classes.foodIcon}  />
         
        </IconButton>
        <Box>
        <Typography  variant="body" gutterBottom color="textPrimary" component="h2">
            Home Delivery
        </Typography>
        <Typography  variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <Button color="secondary">
            Show More
        </Button>
        </Box>
      </CardActions>
    </Card>
                        </Grid>
                        <Grid items sm={12} md={4} >
                        <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://iili.io/2A6VhN.md.png"
      />
      <CardContent>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
        <NotificationsActiveIcon className={classes.foodIcon} />
        </IconButton>
        <Box>
        <Typography  variant="body" gutterBottom color="textPrimary" component="h2">
           A Good Auto Responder
        </Typography>
        <Typography  variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <Button color="secondary">
            Show More
        </Button>
        </Box>
       

      </CardActions>
     
    </Card>
                        </Grid>
                        <Grid items  sm={12} md={4}>
                        <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://iili.io/2A6YEF.png"
      />
      <CardContent>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <LocalShippingIcon  className={classes.foodIcon} />
          
        </IconButton>
        <Box>
        <Typography  variant="body"  color="textPrimary" component="h2">
            Fast Delivery
        </Typography>
        <Typography  variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <Button color="secondary">
            Show More
        </Button>
        </Box>
       

      </CardActions>
     
    </Card>
                        </Grid>
                    </Grid>
                    <Grid container gutterBottom className={classes.footer}>
                        <Grid items sm={12} md={6}>
                            <img className={classes.logo} src="https://iili.io/2To1HJ.png" alt=""/>
                        </Grid>
                        <Grid  items sm={12} md={3} direction="column">
                            <Typography variant="body2"  >
                                <Box>
                             <Link href="#" style={{color: 'white'}}> About Online Blog</Link> 
                                </Box>
                                <Box>
                             <Link href="#" style={{color: 'white'}} >  Read Our Blog</Link> 
                                </Box>
                                <Box>
                             <Link href="#" style={{color: 'white'}}> Signup to deliver</Link> 
                                </Box> 
                                <Box>
                             <Link href="#" style={{color: 'white'}}>Add your Restaurant</Link> 
                                </Box> 
                            </Typography>
                        </Grid>
                        <Grid items sm={12} md={3}>
                        <Typography variant="body2" style={{color: 'white'}} >
                                <Box>
                             <Link href="#" color="inherit" > Read FAQ's</Link> 
                                </Box>
                                <Box>
                             <Link href="#" color="inherit">Get Help</Link> 
                                </Box>
                                <Box>
                             <Link href="#" color="inherit"> View All Cities</Link> 
                                </Box> 
                                <Box>
                             <Link href="#" color="inherit">Restaurant near me</Link> 
                                </Box> 
                            </Typography>
                        </Grid>
                        <Grid items container style={{marginTop: "20px", padding:"10px", color: "white"}} sm={12} md={7} >
                        <Grid sm={12} md={5}>
                    <Typography   variant="p">
                    Copyright Habib, All Right Reserved
                        </Typography>
                    </Grid>
                        </Grid>
                <Grid items sm={12} md={5} container style={{marginTop: "20px", padding:"10px", color: "white"}}>
                    <Grid sm={12} md={5}>
                    <Typography   variant="p">
                        Terms and condition
                        </Typography>
                    </Grid>
                    <Grid sm={12} md={4}>
                    <Typography  variant="p">
                    Privacy and policy
                        </Typography>
                    </Grid>
                    <Grid sm={12} md={3}>
                    <Typography   variant="p">
                    Pricing
                        </Typography>
                    </Grid>
                </Grid>
                    </Grid>
            </Container>
        </div>
    );
};

export default Cards;