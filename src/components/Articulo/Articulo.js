import React ,{useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./styles.css";
import {withRouter} from "react-router-dom"
import {Container, Button} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoIcon from '@material-ui/icons/Photo';
import Not_Found from "../Not_Found/Not_Found";
import { history } from "../../utils/history";
function Articulo({props, location}){
        const [currentArticle, setCurrentArticle] = useState({}) 
        const [amount, setAmount] = useState(1) 
        const dispatch = useDispatch();
        const _isLogged = useSelector((state) => state.client.islogged)
        const client = useSelector((state) => state.client.client.usuario)
        
        useEffect(()=>{
            if (location.state){
              setCurrentArticle(location.state.articulo)
            }
            
        },[])

        const _addToCart = () => {
            
            if (_isLogged){

              if(amount > 0){
                var addToArticleRequest = {
                  articleId:currentArticle._id,
                  amount:amount,
                  username:client
                }

                console.log(addToArticleRequest);
              }else{
                //add popup if amount if empty
                
              }

                
            }else{

              //add popup if user is not loggin
              console.log("Not logged")
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
                    </FormControl>
                    <Button onClick={_addToCart} className={"articulo-box__btn"} ><AddShoppingCartIcon/> Add to cart</Button>
                </div>
              </div>
            </Container>
        )
    }

export default withRouter(Articulo);