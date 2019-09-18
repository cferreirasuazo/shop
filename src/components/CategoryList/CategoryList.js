import React from 'react'
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const BoxNavBar = styled(Box)`
    display:flex;
    justify-content:center;
    padding:13px;
    flex-wrap:wrap;
`
const Item = styled(Link)`
     margin-right:15px;
     list-style:none;
     text-decoration:none;
`

function CategoryList(){
    
    return(
            
        <div>
            <BoxNavBar>
                <Item to="/" ><Box>Inicio</Box></Item>
                <Item to="/pedidos" ><Box>Como Hacer Pedidos</Box></Item>
                <Item to="/nosotros" ><Box>Nosotros</Box></Item>
            </BoxNavBar>   
        </div>

    )
}

export default CategoryList