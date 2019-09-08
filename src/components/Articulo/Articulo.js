import React ,{Component}from "react";
import {Link} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
      width: 175,
      height:175,
      backgroundColor:"green",
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },

    grid:{
      
    }


  });





    
    function Articulo(){
        let articulos = ['Lorem','ipsum',
        'sed', 'vitae', 'placerat',
        'aliquet', 'consequat', 'ut'];

        const classes = useStyles();

        let cards = articulos.map((articulo)=>{
            return (
               <Grid><Card className={classes.card}>{articulo}</Card></Grid>
            )
        })

        return(
            <Container classes = {{root:"root"}} maxWidth="lg">
                <Grid className={"grid"} container alignItems="center">
                {
                    cards
                }
                </Grid> 
               
            </Container>    
        )
    }

export default Articulo