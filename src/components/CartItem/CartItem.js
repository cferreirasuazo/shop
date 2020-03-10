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
        <Paper className={"cart-item"}>
            <div className={"cart-item__info"}>
                <Typography>{`Name: ${articulo.nombre}`}</Typography>
                <Typography>{`Description: ${articulo.descripcion}`}</Typography>
                <Typography>{`Price: ${articulo.precio }`}</Typography>
                <Typography>{`Amount: ${props.articulo.cantidad}`}</Typography>
                <Typography>{`Subtotal: ${ props.articulo.cantidad * articulo.precio }`}</Typography>
            </div>    
            <div className={"cart-item__actions"}>
                <Button className={"cart-item__btn_delete"} >Update</Button> 
                <Button className={"cart-item__btn_update"} onClick={()=>{onDelete(props.articulo._id)}}>Delete</Button> 
            </div>     
        </Paper>
    )
   
    }

export default CartItem;