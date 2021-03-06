import React ,{useEffect, useState } from "react";
import { useSelector,connect} from "react-redux";
import "./styles.css";
import {withRouter,useLocation} from "react-router-dom"
import {Button, Box} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Popper from '@material-ui/core/Popper';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoIcon from '@material-ui/icons/Photo';
import {addToCart} from "../../actions/cartActions"
import CategoryList from "../CategoryList/CategoryList"





function Articulo({addToCart}){
        const [currentArticle, setCurrentArticle] = useState({}) 
        const [amount, setAmount] = useState(1) 
        const [isSaving, setSaving] = useState(false);
        const _isLogged = useSelector((state) => state.client.islogged)
        const client = useSelector((state) => state.client.client.correo)
        const cart = useSelector((state) => state.cart.articles)
        const location = useLocation()
        const [anchorEl, setAnchorEl] = useState(null)

        const styles = {
          width:"200px",
          height:"40px",
          cursor:"pointer",
          margin: "auto",
          borderRadius:"50px",
          textAlign:"center",
          fontsize:"16px",
          border: "1px solid transparent",
          backgroundColor: "#204051",
          color: "#cae8d5"
        }

        useEffect(()=>{
            if (location.state){
              setCurrentArticle(location.state.articulo)
            }
            
        },[])

        const isInCart = function(articles,currentArticle){
            var inCart = false;
            articles.forEach((article,index,articles)=>{
                  if(article.articulo._id === currentArticle._id){
                    inCart = true
                  }       
            })

            return inCart
        }

      
        const _addToCart = (event) => {
            
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
                }
               }
            }else{
              setAnchorEl(anchorEl ? null : event.currentTarget);
            }
        }

        //Event for handle the selection of Select component
        const handleChange = event => {
            setAmount(event.target.value)
          };

        return(
           <div className={"article"}>
              <CategoryList></CategoryList>
              <Box  className={"articulo-box"}>
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
                    <Button style={styles} onClick={_addToCart} className={"articulo-box__btn"} ><AddShoppingCartIcon/> Add to cart</Button>
                    <Popper id={"popper"} open={Boolean(anchorEl)} anchorEl={anchorEl} >
                      <div>Must Login</div>
                    </Popper>
                </div>
              </div>
            </Box>
           </div>
        )
    }

const mapDispatchToProps = {
    addToCart
}
  

export default connect(null,mapDispatchToProps)(withRouter(Articulo));