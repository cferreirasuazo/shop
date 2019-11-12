import React, {Component} from "react"
import { Container, Button, Box, Card,
         CardContent, Typography,CardActions } from "@material-ui/core";
import "./styles.css";
import items from "../../fakeItems";
import CarritoObjeto from "../CarritoObjeto/CarritoObjeto"

class Carrito extends Component{
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
                                <Typography component="p" variant="p" >
                                    {`Subtotal(${5} items): $${10.50} `}
                                </Typography>
                            </div>
                            <div>
                                <Button className={"confirmationBtn"}>Hacer Compra</Button>
                            </div>
                    </div>
                    </Box>



                    <Box className={"list"}>
                        {items.map((articulo)=>(
                            <CarritoObjeto articulo = {articulo}/>
                        ))}
                    </Box>
                
                 </Box>
            </div>
        )
    }

}

export default Carrito