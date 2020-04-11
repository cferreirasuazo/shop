import React ,{useEffect, useState } from "react";
import {useDispatch, useSelector,connect} from "react-redux";
import "./styles.css";
import {withRouter,useLocation} from "react-router-dom"
import {Container, Button} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoIcon from '@material-ui/icons/Photo';
import Not_Found from "../Not_Found/Not_Found";
import { history } from "../../utils/history";
import {addToCart} from "../../actions/cartActions"

function Articulo({addToCart}){
        const [currentArticle, setCurrentArticle] = useState({}) 
        const [amount, setAmount] = useState(1) 
        const [isSaving, setSaving] = useState(false);
        const dispatch = useDispatch();
        const _isLogged = useSelector((state) => state.client.islogged)
        const client = useSelector((state) => state.client.client.correo)
        const cart = useSelector((state) => state.cart.articles)
        const location = useLocation()

        useEffect(()=>{
            if (location.state){
              setCurrentArticle(location.state.articulo)
            }
            
        },[])

        const isInCart = function(articles,currentArticle){
            var inCart = false;
            articles.forEach((article,index,articles)=>{
                  if(article.articulo._id == currentArticle._id){
                    inCart = true
                  }       
            })

            return inCart
        }

        const _addToCart = () => {
            
            if (_isLogged){

              if(amount > 0){
                var addToArticleRequest = {
                  articuloId:currentArticle._id,
                  cantidad:amount,
                  correo:client
                }
                if(!isInCart(cart,currentArticle)){
                    setSaving(true)
                    addToCart(addToArticleRequest).then((resolve)=>{
                        setSaving(resolve)
                    })  
                  }else{
                  console.log("not added")
                }
                
                               

                


               }else{
                //add popup if amount if empty 
              }
            }else{
              //add popup if user is not loggin
             
            }
        }

        //Event for handle the selection of Select component
        const handleChange = event => {
            setAmount(event.target.value)
          };

        return(
            <Container  className={"articulo-box"}>
              <div className={"articulo-photo"}>
                <PhotoIcon className={"icon"}></PhotoIcon>
              </div>
              <div className={"articulo"}>
                <div>
                    <h1>{currentArticle.nombre}</h1>     
                    <hr></hr>
                    <p>{currentArticle.descripcion}</p> 
                </div>
                <div className={"articulo-box__actions"}>
                    <p>{`$${currentArticle.precio}`}</p>
                    <FormControl>
                        <Select value={amount} onChange={handleChange} displayEmpty>
                        {[1,2,3,4,5,6,7,8,9].map((i)=>(<MenuItem key={i} value={i}>{i}</MenuItem>))}
                        </Select>
                        <FormHelperText>Amount</FormHelperText>
                        <p style={{display: isSaving ? "inline" : "none"  }}>adding...</p>
                    </FormControl>
                    <Button onClick={_addToCart} className={"articulo-box__btn"} ><AddShoppingCartIcon/> Add to cart</Button>
                </div>
              </div>
            </Container>
        )
    }

const mapDispatchToProps = {
    addToCart
}
  

export default connect(null,mapDispatchToProps)(withRouter(Articulo));