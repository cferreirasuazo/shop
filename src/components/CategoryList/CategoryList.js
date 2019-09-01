import React from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Link,Switch} from "react-router-dom";
import styled from 'styled-components';
import DropDown from "../Dropdown"

const BoxNavBar = styled(Box)`
    display:flex;
    justify-content:center;

`

const Item = styled(Link)`
     margin-right:10px;
     list-style:none;
     text-decoration:none;

`


function CategoryList(){
    
    return(
            
        <div>
            <BoxNavBar>
                <Item to ="/" ><Box>Inicio</Box></Item>
                <Item to ="/categorias" ><Box>categorias</Box></Item>
                <Item to ="/ofertas" ><Box>Ofertas</Box></Item>
                <Item to ="/mercancia" ><Box>Mercancia</Box></Item>
                <Item to ="/pedidos" ><Box>Como Hacer Pedidos</Box></Item>
                <Item to ="/nosotros" ><Box>Nosotros</Box></Item>
            </BoxNavBar>   
        </div>

    )
}


export default CategoryList