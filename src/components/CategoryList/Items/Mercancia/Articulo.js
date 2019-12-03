import React,{Component} from "react";
class Articulo extends Component{
    constructor(item){
        super(item)
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(item){
        console.log(item)
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




export default Articulo;