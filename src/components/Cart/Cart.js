import React, {Component} from "react"
import {Button, Box, Container, Paper} from "@material-ui/core";
import "./styles.css";
import CartItem from "../CartItem/CartItem";
import { connect } from 'react-redux';
import {fetchArticles,deleteArticle} from "../../actions/cartActions"
import EmptyCart from "../EmpyCart/EmptyCart";
class Cart extends Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
      
    }

    componentDidMount(){
        //this.props.fetchArticles()
        
    }

    handleDelete(id){
        console.log("handleDelete")
        this.props.deleteArticle(id)
        
    }
    
    getSubtotal(articles){

        var total = articles.map((item)=>{
            return item.cantidad * item.articulo.precio;
        })

       var subtotal = total.reduce((acum,value)=> acum + value,0)
       return subtotal;
       
    }

    render(){
        return (
            <div>
                
                {
                    (this.props.items.length > 0) ? 
                    <Container className="cart-box">
                    <Box className={"cart__products-list"}>
                        {
                            this.props.items.map((item,key)=>(
                                <CartItem key={key} articulo={item} handleDelete={this.handleDelete} />
                            ))
                        }
                    </Box>
                    <Paper className={"cart__confirmation"}>
                            <div className={"order-summary"}>
                                <p>Order Summary</p>
                                <div className={"item-value"}>
                                    <p>Items</p><p>{this.getSubtotal(this.props.items)}</p>
                                </div>
                                {/* <div className={"item-value"}>
                                    <p>Sales Tax & Shipping</p><p>250</p>
                                </div> */}

                            </div>

                            <div className={"cart__confirmation-actions"}>
                                <Button className={"cart__confirmation-btn"} variant="contained" size="large" color="primary" >Hacer Compra</Button>
                            </div>
                    </Paper>
                
                 
            </Container>
                :
                <EmptyCart></EmptyCart>
                
                
                }
            </div>
            
        )
    }

}

const mapStateToProps = store => ({
    items: store.cart.articles,
    length: store.cart.articles.length

})

const mapDispatchToProps = {
    fetchArticles,
    deleteArticle
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)


