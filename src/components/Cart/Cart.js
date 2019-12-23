import React, {Component} from "react"
import {Button, Box} from "@material-ui/core";
import "./styles.css";
import CartItem from "../CartItem/CartItem";
import { connect } from 'react-redux';
import {fetchArticles,deleteArticle} from "../../actions/cartActions"

class Cart extends Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
      
        
    }

    componentDidMount(){
        //this.props.fetchArticles()
        
    }

    handleDelete(id){
        this.props.deleteArticle(id)
        
    }
    
    getSubtotal(articles){
       var subtotal = articles.reduce((acum,value)=> acum + value.precio,0)
       return subtotal
       
    }

    render(){
        return (
            <div className="wrapper">
                 <Box className={"inner"}>
                 <Box>
                    <div className={"confirmationBox"}>
                            <div>
                                <p> {`Subtotal(${this.props.length} items): $${this.getSubtotal(this.props.items)} `}</p>
                            </div>
                            <div>
                                <Button className={"confirmationBtn"}>Hacer Compra</Button>
                            </div>
                    </div>
                    </Box>


                    <Box className={"list"}>
                        {
                            this.props.items.map((item,key)=>(
                                <CartItem key={key} articulo={item} handleDelete={this.handleDelete} />
                            ))
                        }
                    </Box>
                
                 </Box>
            </div>
        )
    }

}

const mapStateToProps = store => ({
    items: store.cart.articles,
    length: store.cart.articles.length

})

const mapDispatchToProps = {
    fetchArticles,
    deleteArticle
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)


