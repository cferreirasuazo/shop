import React, { Component } from "react" 
import {Link} from "react-router-dom";
import "./styles.css"
import { Container, Box} from "@material-ui/core";
import axios from "axios";

import Loading from "../../../Loading/Loading";
class Inicio extends Component{

    constructor(props){
        super(props)
        this.state = {
            categorias:[],
            isLoading:true
        }

    }

    componentDidMount(){
        const url = "http://localhost:4000/api/categorias";
        axios.get(url).then((data)=>{
            this.setState({categorias:data.data})
            this.setState({isLoading:false})
        })
            
    }


    render(){
          
    const links = this.state.categorias.map((categoria)=>{
        return (
            <Link className={"categorie"} key={categoria.id} to={`/mercancia/${categoria.nombre}`} key={categoria.nombre}>
              <h1 className={"categorie-title"}>{categoria.nombre}</h1>
                {/* <img alt={`${categoria}`} src={require(`../../../../statics/${categoria}.png`)} /> */}
            </Link>
        )
    })

    return (
       <Container className={"inicio"}>
        {
            !this.state.isLoading ? 
            <div className={"inicio-box"}>
            <h1 className={"inicio-box__title"}>Lorem ipsum dolor sit amet</h1>

            <Box className="inicio-categories">
                { links }
            </Box> 
            </div>
            : <Loading></Loading>
        }

       </Container>
    )
}


}
export default Inicio;

// export default connect(mapStateToProps,mapDispatchToProps)(Inicio)