import React from "react" 
import { makeStyles } from '@material-ui/core/styles';
import SliderProducto from "./SliderProducto/SliderProducto"
import styled from 'styled-components';
import shopping_bag from "./shopping_bag.png"

const Grid = styled.div`
    border:1px solid red;
    padding-right: 40px;
    padding-left: 40px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 8px;
`
const Item = styled.div`
        border:1px solid red
        padding:10px;
`


function Inicio(){
    return (
       <div>
         <h1>INICIO</h1>
        <SliderProducto/>

        <div>
            <h1>Lorem ipsum dolor sit amet</h1>

            <Grid>
                    <Item>
                        <img src={shopping_bag}/>
                        <p>Nombre</p>    
                    </Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    <Item>#</Item>
                    

            </Grid> 

        </div>

       </div>
    )
}

export default Inicio