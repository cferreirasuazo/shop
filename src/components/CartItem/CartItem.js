import React, { useCallback, useEffect } from 'react';
import { Button, Typography, Paper
        } from "@material-ui/core";
import "./styles.css";

const CartItem = (props) => {

    const onDelete = useCallback((id)=>{
        props.handleDelete(id)
    })

    var {articulo} = props.articulo

    return (
        <Paper>
            <div>
                <Typography>{articulo.nombre}</Typography>
                <Typography>{articulo.descripcion}</Typography>
                <Typography>{articulo.precio}</Typography>
                <Typography>{props.articulo.cantidad}</Typography>
            </div>    
            <div>
                <Button>Update</Button> 
                <Button onClick={()=>{onDelete(props.articulo._id)}}>Delete</Button> 
            </div>    
            <Button>Checkout</Button>   
        </Paper>
    )
   
    }

export default CartItem;