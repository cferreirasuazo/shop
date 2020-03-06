import React, { Component } from "react" 
import {Link} from "react-router-dom";
import "./styles.css"
import { Container} from "@material-ui/core";
import axios from "axios";
import Login from "../../../Login/Login";



// import {connect} from "react-redux";
// import { bindActionCreators } from "redux";

class Inicio extends Component{

    constructor(props){
        super(props)
        this.state = {
            categorias:[]
        }

    }

    componentDidMount(){
        const url = "http://localhost:4000/api/categorias";
        axios.get(url).then((data)=>{
            this.setState({categorias:data.data})
        })
            
    }


    render(){
    
    // const categorias = ["chair","bacon","computer",
    //                     "chicken","soap","mouse",
    //                     "tuna","car","shoes"];
    
                 
    const links = this.state.categorias.map((categoria)=>{
        return (
            <Link className={"link"} to={`/${categoria.nombre}`} key={categoria.nombre}>
              <h1>{categoria.nombre}</h1>
                {/* <img alt={`${categoria}`} src={require(`../../../../statics/${categoria}.png`)} /> */}
            </Link>
        )
    })

    return (
       <div>
           <Login/>


        <div>
            <h1>Lorem ipsum dolor sit amet</h1>

            <Container className="container">
                {
                    links
                }
            </Container> 

        </div>

       </div>
    )
}


}
export default Inicio;

// export default connect(mapStateToProps,mapDispatchToProps)(Inicio)