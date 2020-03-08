import React ,{useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./styles.css";
import {withRouter} from "react-router-dom"
import {Container, Button} from "@material-ui/core";
import {addToCart} from "../../actions/cartActions"

function Articulo(props){
        const [currentArticle, setCurrentArticle] = useState({"value":"lorem ipsum "}) 
        const dispatch = useDispatch();

        return(
            <Container className={"articulo-box"}>
                <h1>Articulo</h1>     
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit habitant arcu ornare, sapien fusce viverra scelerisque dictum elementum class turpis lectus nisi, gravida etiam lacinia non tellus himenaeos eget vestibulum eleifend.</p>        
                <div className={"articulo-box__actions"}>
                    <p>{"PRICE"}</p>
                    <p>{"QTY"}</p>
                    <Button onClick={()=> dispatch(addToCart(currentArticle))} className={"articulo-box__btn"} >Add to cart</Button>
                </div>

            </Container>
        )
    }

export default Articulo