import React, { Component } from "react" 
import {Link} from "react-router-dom";
import "./styles.css"
import { Container} from "@material-ui/core";
// import {connect} from "react-redux";
// import { bindActionCreators } from "redux";

class Inicio extends Component{

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