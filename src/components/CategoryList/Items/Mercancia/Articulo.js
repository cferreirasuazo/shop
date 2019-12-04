import React,{Component} from "react";
import {addToCart} from "../../../../actions/cartActions";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'

class Articulo extends Component{
    constructor(item){
        super(item)
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(item){
        this.props.addToCart(item)
    }



    render(){
       return(
        <div key={this.props.item.codigo} className={"item"}>
            <p>{this.props.item.nombre}</p>
            
            <button onClick={(e) => {this.addToCart(this.props.item)} }>add to cart</button>           
        </div> 
       )
    }
}


const mapDispatchToProps = {
    addToCart
}


export default connect(null,mapDispatchToProps)(Articulo)

