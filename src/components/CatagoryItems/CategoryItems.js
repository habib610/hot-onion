import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 100,
    },
    media: {
        height: 100,
        paddingTop: '56.25%', // 16:9
      },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });



const CategoryItems = (props) => {
    // console.log(props)
    const classes = useStyles();
    const {category, id, name, price, shortDescription, photo} = props.item;
    return (
       

            <Grid items  xs={12} sm={4} align="center">
            <Card >
       
       <CardContent className={classes.root}>
       <CardMedia
         className={classes.media}
         image={photo}
         title="Paella dish"
         gutterBottom
       />
         <Typography color="textPrimary" variant="h6" component="h5"  gutterBottom>
           {name}
         </Typography>
         <Typography variant="body2" component="p">
         </Typography>
         <Typography variant="body2" component="p">
             {shortDescription}
         </Typography>
         <Typography variant="h4" color="secondary"  component="h2">
             ${price}
         </Typography>
       </CardContent>
     </Card>
            </Grid>

    
       
    );
};

export default CategoryItems;