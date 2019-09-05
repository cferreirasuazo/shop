import React ,{Component}from "react";
import {Link} from "react-router-dom";

class Articulo extends Component{
    render(){

        
        return(

            <div>
                <h1>ARTICULOS en Categoria</h1>
                <Link to={"/"}>INICIO</Link>
            
            </div>
            
        )
    }
}

export default Articulo