import React, {Component} from "react"
import {Button, Box} from "@material-ui/core";
import "./styles.css";


class Cart extends Component{

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
                    </Box>
                
                 </Box>
            </div>
        )
    }

}

export default Cart