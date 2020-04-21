import React, { useCallback} from 'react';
import { Button, Typography, Paper
        } from "@material-ui/core";
import "./styles.css";
import ClearIcon from '@material-ui/icons/Clear';


const CartItem = (props) => {

    const styles = {
        backgroundColor: "#84a9ac",
        color: "#cae8d5"
    }


    const onDelete = useCallback((id)=>{
        props.handleDelete(id)
    })

    var {articulo} = props.articulo

    return (
        <Paper style={styles} key={articulo.id} className={"cart-item"}>
            <div className={"cart-item__info"}>
                <Typography>{`Name: ${articulo.nombre}`}</Typography>
                <Typography>{`Description: ${articulo.descripcion}`}</Typography>
                <Typography>{`Price: ${articulo.precio }`}</Typography>
                <Typography>{`Amount: ${props.articulo.cantidad}`}</Typography>
                <Typography>{`Subtotal: ${ props.articulo.cantidad * articulo.precio }`}</Typography>
            </div>    
            <div className={"cart-item__actions"}>
                <Button style={{backgroundColor: "#204051",color: "#cae8d5"}} className={"cart-item__btn_delete"} >Update</Button> 
                <Button style={{backgroundColor: "#204051",color:"#cae8d5" }}  className={"cart-item__btn_update"} onClick={()=>{onDelete(props.articulo._id)}}><ClearIcon/> Delete</Button> 
            </div>     
        </Paper>
    )
   
    }

export default CartItem;