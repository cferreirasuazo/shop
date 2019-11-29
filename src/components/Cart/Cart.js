import React, {Component} from "react"
import {Button, Box} from "@material-ui/core";
import "./styles.css";

import { connect } from 'react-redux';
import {fetchArticles} from "../../actions/cartActions"

class Cart extends Component{

    componentDidMount(){
        this.props.fetchArticles()
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
                            this.props.items.map((item,key)=>(
                                <div key={key}>{item.name}</div>
                            ))
                        }
                    </Box>
                
                 </Box>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    items: state.articles,
    arr: state.arr
})

const mapDispatchToProps = {
    fetchArticles
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)


