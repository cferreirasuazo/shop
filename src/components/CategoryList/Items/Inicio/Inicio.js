/*
    Instal Redux

*/


import React, { Component } from "react" 
//import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
//import shopping_bag from "./shopping_bag.png"
//import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import "./styles.css"
import png from "../../../../statics/bacon.png";
import { Container } from "@material-ui/core";
import Mercancia from "../Mercancia/Mercancia"


class Inicio extends Component{
    
    render(){


    const categorias = ["chair","bacon","computer",
                        "chicken","soap","mouse",
                        "tuna","car","shoes"];
    
                 
    const links = categorias.map((categoria)=>{
        return (
            <Link className={"link"} to={`/${categoria}`} key={categoria}>
              <h1>{categoria}</h1>
                <img src={require(`../../../../statics/${categoria}.png`)} />
            </Link>
        )
    })

    return (
       <div>
        <h1>INICIO</h1>
        <div>
            <h1>Lorem ipsum dolor sit amet</h1>

            <Container className="container">
                {
                    links
                }
            </Container> 

        </div>

       </div>
    )
}


}
export default Inicio