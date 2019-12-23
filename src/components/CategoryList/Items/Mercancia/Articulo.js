import React,{Component} from "react";


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
        </div> 
       )
    }
}


export default Articulo

