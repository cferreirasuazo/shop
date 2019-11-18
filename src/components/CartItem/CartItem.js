import React from 'react';
import { Container, Button, Box, Card,
        CardContent, Typography, CardActions, 
        } from "@material-ui/core";
import "./styles.css";

const CartItem = (props) => (
        <Card className={"card"}>
            <div className={"cardMedia"}>
                <div  className={"cardPic"}>

                </div>
            </div>
            <CardContent>
                <Typography>{props.articulo.codigo} </Typography>
                <Typography>{props.articulo.nombre}</Typography>
                <Typography>{props.articulo.categoria}</Typography>
                <Typography>{props.articulo.precio}</Typography>
                <CardActions className={"cardActions"} >
                <Button>Delete</Button> 
                </CardActions>
            </CardContent>           
        </Card>

)

export default CartItem;