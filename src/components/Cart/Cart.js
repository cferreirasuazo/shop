import React, {Component} from "react"
import {Button, Box} from "@material-ui/core";
import "./styles.css";
import CartItem from "../CartItem/CartItem";
import { connect } from 'react-redux';
import {fetchArticles} from "../../actions/cartActions"

class Cart extends Component{

    componentDidMount(){
        //this.props.fetchArticles()
    }

    handleDelete(id){
        console.log(id)
    }
    
    handleUpdate(){
        console.log()
    }

    render(){
        return (
            <div className="wrapper">
                 <Box className={"inner"}>
                 <Box>
                    <div className={"confirmationBox"}>
                            <div>
                                <p> {`Subtotal(${5} items): $${10.50} `}</p>
                            </div>
                            <div>
                                <Button className={"confirmationBtn"}>Hacer Compra</Button>
                            </div>
                    </div>
                    </Box>


                    <Box className={"list"}>
                        {
                            this.props.tems.map((item,key)=>(
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
    items: store.cart.articles
})

const mapDispatchToProps = {
    fetchArticles
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)


