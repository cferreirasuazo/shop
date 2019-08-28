import React from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Link,Switch} from "react-router-dom";
import styled from 'styled-components';

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


       const list = ["Inicio","Categorias","Ofertas","Nueva Mercancia","Como hacer pedidos","Acerca de nosotros"]
    
    return(
            
        <div>
            <BoxNavBar>
                <Item to ="/" ><Box>Inicio</Box></Item>
                <Item to ="/categorias" ><Box>Categorias</Box></Item>
                <Item to ="/ofertas" ><Box>Ofertas</Box></Item>
                <Item to ="/mercancia" ><Box>Nueva Mercancia</Box></Item>
                <Item to ="/pedidos" ><Box>Como Hacer Pedidos</Box></Item>
                <Item to ="/nosotros" ><Box>Nosotros</Box></Item>
            </BoxNavBar>   
        </div>

    )
}


export default CategoryList