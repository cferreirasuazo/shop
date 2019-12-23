import React, { useCallback } from 'react';
import { Button, Typography 
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
           
            <Button>Update</Button> 
            <Button onClick={()=>{onDelete(props.articulo._id)}}>Delete</Button> 
        </div>       
        
    </div>
    )
   
    }

export default CartItem;