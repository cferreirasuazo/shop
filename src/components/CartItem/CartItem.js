import React, { useCallback } from 'react';
import { Button, Card,
        CardContent, Typography, CardActions, 
        } from "@material-ui/core";
import "./styles.css";

const CartItem = (props) => {

    const onDelete = useCallback((id)=>{
        props.handleDelete(id)
    })


    return (
        <div className={"item"}>
        <div className={"cardMedia"}>
            <div  className={"cardPic"}>

            </div>
        </div>
        <div className={"cardInfo"}>
            <Typography>{props.articulo.codigo} </Typography>
            <Typography>{props.articulo.nombre}</Typography>
            <Typography>{props.articulo.categoria}</Typography>
            <Typography>{props.articulo.precio}</Typography>
        </div>    
        <div className={"cardActions"} >
            <input value={1} size={1}/>
            <Button>Update</Button> 
            <Button onClick={()=>{onDelete(props.articulo.codigo)}}>Delete</Button> 
        </div>       
        
    </div>
    )
   
    }

export default CartItem;