import React, {Component} from "react"
import { Container, Button, Box } from "@material-ui/core";
import "./styles.css";

class Carrito extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Container className="wrapper">
                <p>Shopping Cart</p>
                 <Box className={"inner"}>
                    <Box className={"list"}>List</Box>
                    <Box className={"confirmationBox"}>confirmationBox</Box>
                 </Box>
            </Container>
        )
    }

}

export default Carrito