import React, {Component} from "react"
import { Container, Button, Box, Card,
         CardContent, Typography,CardActions } from "@material-ui/core";
import "./styles.css";
import items from "../../fakeItems";

class Cart extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="wrapper">
                 <Box className={"inner"}>
                 <Box>
                    <div className={"confirmationBox"}>
                            <div>
                                <Typography component="h1" variant="h1" >
                                    {`Subtotal(${5} items): $${10.50} `}
                                </Typography>
                            </div>
                            <div>
                                <Button className={"confirmationBtn"}>Hacer Compra</Button>
                            </div>
                    </div>
                    </Box>


                    <Box className={"list"}>
                    </Box>
                
                 </Box>
            </div>
        )
    }

}

export default Cart