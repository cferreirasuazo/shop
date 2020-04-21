import React  from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    background: #3b6978;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    border-radius:5px;
`
const Name = styled.p`
    color: #fff;
`

const Price = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 15px;
    color: #3b6978;
    line-height: 60px;
    text-align: center;
    background: #cae8d5;
    align-self: flex-end;
`

const Articulo = ({item}) =>(

        <StyledLink to={{
            pathname: `/articulo/${item._id}`,
            state:{
                articulo: item
            }
        }} >

            <Name>{item.nombre}</Name>
            <Price>{`$ ${item.precio}`}</Price>
        </StyledLink>        
)  





export default Articulo

