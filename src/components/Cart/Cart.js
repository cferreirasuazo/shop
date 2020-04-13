import React, {Component} from "react"
import {Button, Box, Container, Paper} from "@material-ui/core";
import "./styles.css";
import CartItem from "../CartItem/CartItem";
import { connect } from 'react-redux';
import {deleteArticle, createOrder} from "../../actions/cartActions"
import EmptyCart from "../EmpyCart/EmptyCart";


const Cart = (props) =>{


   function handleDelete(id){
        
        props.deleteArticle(id)
        
    }
    
    function getSubtotal(articles){

        var total = articles.map((item)=>{
            return item.cantidad * item.articulo.precio;
        })

       var subtotal = total.reduce((acum,value)=> acum + value,0)
       return subtotal;
       
    }

    function submitOrder(){
        props.createOrder(props.email).then((success) => (
            window.alert("Order submited")
        ))

    }

    return (
        <div>
            
            {
                (props.items.length > 0) ? 
                <Container className="cart-box">
                <Box className={"cart__products-list"}>
                    {
                        props.items.map((item,key)=>(
                            <CartItem key={key} articulo={item} handleDelete={handleDelete} />
                        ))
                    }
                </Box>
                <Paper className={"cart__confirmation"}>
                        <div className={"order-summary"}>
                            <p>Order Summary</p>
                            <div className={"item-value"}>
                                <p>Items</p><p>{getSubtotal(props.items)}</p>
                            </div>
                            {/* <div className={"item-value"}>
                                <p>Sales Tax & Shipping</p><p>250</p>
                            </div> */}
                        </div>

                        <div className={"cart__confirmation-actions"}>
                            <Button className={"cart__confirmation-btn"} variant="contained" size="large" color="primary" onClick={()=>(submitOrder())} >Submit Order</Button>
                        </div>
                </Paper>
            
             
        </Container>
            :
            <EmptyCart></EmptyCart>
            
            
            }
        </div>

    )

}


const mapStateToProps = store => ({
    items: store.cart.articles,
    length: store.cart.articles.length,
    email:store.client.client.correo

})

const mapDispatchToProps = {
    deleteArticle,
    createOrder
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)




