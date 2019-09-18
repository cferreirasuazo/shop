import React from "react";
//import {Link} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css";
import Grid from '@material-ui/core/Grid';


    
    function Articulo(){
        let articulos = ['Lorem','ipsum',
        'sed', 'vitae', 'placerat',
        'aliquet', 'consequat', 'ut'];

        let cards = articulos.map((articulo)=>{
            return (
               <Grid><Card>{articulo}</Card></Grid>
            )
        })

        return(
            <Container maxWidth="lg">
                <Grid className={"grid"} container alignItems="">
                {
                    cards
                }
                </Grid> 
               
            </Container>    
        )
    }

export default Articulo