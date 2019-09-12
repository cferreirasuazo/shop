import React from "react" 
//import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
//import shopping_bag from "./shopping_bag.png"
//import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import "./styles.css"

const Grid = styled.div`
    border:1px solid red;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 8px;
    margin-top:5px;
    margin-bottom:10px;
    padding:25px;
`

function Inicio(){

    const categorias = ["Chair","Bacon","Computer",
                        "Chicken","Soap","Mouse",
                        "Tuna","Car","Shoes",
                        "Table","Hat","Keyboard"];


    const links = categorias.map((categoria)=>{
        return (
             <Card classes={{root:"cardRed"}}>{categoria}</Card>   // <Link to={`/${categoria}`} key={categoria}>{categoria}</Link>
        )
    })

    return (
       <div>
        <h1>INICIO</h1>
        <div>
            <h1 className>Lorem ipsum dolor sit amet</h1>

            <Grid>
                {
                    links
                }
            </Grid> 

        </div>

       </div>
    )
}

export default Inicio