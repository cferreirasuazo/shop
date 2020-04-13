import React,{Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    background: #539cb2;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`
const Name = styled.p`
    color: #fff;
`

const Price = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 15px;
    color: #fff;
    line-height: 60px;
    text-align: center;
    background: green;
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
//       
)  



// class Articulo extends Component{
//     constructor(item){
//         super(item)
//         //this.addToCart = this.addToCart.bind(this)
//     }

//     // addToCart(item){
//     //     props.addToCart(item)
//     // }

//     render(){
//        
//     }
// }


export default Articulo

