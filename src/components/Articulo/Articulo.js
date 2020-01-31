import React, {useEffect} from "react";
import "./styles.css";
import {withRouter} from "react-router-dom"
import {Container, Button} from "@material-ui/core";


    function Articulo({match,location,props}){
        const articuloId = match.params.nombre;
        console.log(props);
    
        return(
            <Container>
                <h1>Articulo</h1>     
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit habitant arcu ornare, sapien fusce viverra scelerisque dictum elementum class turpis lectus nisi, gravida etiam lacinia non tellus himenaeos eget vestibulum eleifend.</p>        
                <div>
                    <p>{"PRICE"}</p>
                    <p>{"QTY"}</p>
                    <Button>Add to cart</Button>
                </div>
                <div>
                    <h1>{"SOME OTHER THING YOU MAY LIKE"}</h1>
                    <div>
                        {[1,2,3].map((item)=>(<div>{"ITEM"}</div>))}
                    </div>
                </div>


            </Container>
        )
    }

export default withRouter(Articulo);