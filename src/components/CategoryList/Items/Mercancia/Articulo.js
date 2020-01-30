import React,{Component} from "react";
import {Link} from "react-router-dom";

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
        <div key={this.props.item._id} className={"item"}>
                <Link to={`/articulo/${this.props.item.codigo}`}>{this.props.item.nombre}</Link>          
        </div> 
       )
    }
}


export default Articulo

