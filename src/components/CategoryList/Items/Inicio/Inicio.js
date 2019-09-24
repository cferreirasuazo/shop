import React, { Component } from "react" 
import {Link} from "react-router-dom";
import "./styles.css"
import { Container, Button } from "@material-ui/core";
import {connect} from "react-redux";
import agregarArticulo from "../../../../actions/cartActions";
import { bindActionCreators } from "redux";

class Inicio extends Component{

    constructor(props){
        super(props);
    }

    render(){
    
    const categorias = ["chair","bacon","computer",
                        "chicken","soap","mouse",
                        "tuna","car","shoes"];
    
                 
    const links = categorias.map((categoria)=>{
        return (
            <Link className={"link"} to={`/${categoria}`} key={categoria}>
              <h1>{categoria}</h1>
                <img alt={`${categoria}`} src={require(`../../../../statics/${categoria}.png`)} />
            </Link>
        )
    })

    return (
       <div>
        <h1>{this.props.size}</h1>
        <Button onClick ={() => this.props.agregarArticulo("20")}>Test</Button>
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


const mapStateToProps = (state) => {
    return {
        size:state.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({agregarArticulo:agregarArticulo},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Inicio)