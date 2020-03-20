import React,{Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    background: lightblue;
`

class Articulo extends Component{
    constructor(item){
        super(item)
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(item){
        this.props.addToCart(item)
    }



    render(){
       return(
        <Link to={{
            pathname: `/articulo/${this.props.item._id}`,
            state:{
                articulo: this.props.item
            }
        }} >
            <h1>{this.props.item.nombre}</h1>
            <p>{this.props.item.precio}</p>
        </Link> 
       )
    }
}


export default Articulo

