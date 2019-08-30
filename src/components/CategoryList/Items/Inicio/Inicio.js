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

const ArticuloDelDia = styled.div`
    border: 1px solid red;

`




function Inicio(){
    return (
       <div>
        <h1>INICIO</h1>
        <ArticuloDelDia>
                <div>
                    <p>Lorem Ipsum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$$$$$$$$$$$</p>
                    <button>Ver Articulo</button>
                </div>
                
                <div>
                    <img src ={shopping_bag} />
                </div>
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