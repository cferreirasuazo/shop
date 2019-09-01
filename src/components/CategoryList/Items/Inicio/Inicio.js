import React from "react" 
import { makeStyles } from '@material-ui/core/styles';
import SliderProducto from "./SliderProducto/SliderProducto";
import styled from 'styled-components';
import shopping_bag from "./shopping_bag.png"
import Button from '@material-ui/core/Button';



const Grid = styled.div`
    border:1px solid red;
    padding-right: 40px;
    padding-left: 40px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 8px;
`
const Item = styled.div`
        border:1px solid red
        padding:10px;
`

const ArticuloDelDia = styled.div`
    border: 1px solid red;
    display:flex;
    justify-content:center;
    width:100%;

`
const FlexBox = styled.div`
    display:flex;
    background-color: red;
    flex-direction:column;
    p{
        margin:0;
        padding:2.5px;
        
    }
    text-align:left
    padding:25px;
   
`

function Inicio(){
    return (
       <div>
        <h1>INICIO</h1>
        <ArticuloDelDia>
                <FlexBox>
                    <p>Lorem Ipsum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$$$$$$$$$$$</p>
                    <div><Button>Ver Articulo</Button></div>
                </FlexBox>
                
        </ArticuloDelDia>
        <div>
            <h1>Lorem ipsum dolor sit amet</h1>

            <Grid>
                {
                    ["Chair","Bacon","Computer","Chicken","Soap","Mouse","Tuna","Car","Shoes","Table","Hat","Keyboard"].map((categoria)=>(
                        <Item>{categoria}</Item>    
                    ))
                }
            </Grid> 

        </div>

       </div>
    )
}

export default Inicio