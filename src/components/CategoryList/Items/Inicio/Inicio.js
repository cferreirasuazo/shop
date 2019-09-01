import React from "react" 
import { makeStyles } from '@material-ui/core/styles';
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
    padding:25px;
    margin-top:5px;
    margin-bottom:10px;

`
const Item = styled.div`
        border:1px solid red
        padding:10px;
`

function Inicio(){
    return (
       <div>
        <h1>INICIO</h1>
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