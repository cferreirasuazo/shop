import React from "react";
import {Box} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import "./styles.css";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import HomeButton from "../HomeButton/HomeButton";


const paperStyles = {
    backgroundColor: "#cae8d5"
}
const EmptyCart = () => (
        <Box className={"empty_cart-container"}>
            <Card style={paperStyles} className={"empty_cart-box"}>
                <RemoveShoppingCartIcon fontSize="large" className={"icon"}></RemoveShoppingCartIcon>
                <p>It looks like your shopping cart is empty, try to buy something to fill it</p>
                <HomeButton></HomeButton>
            </Card>
        </Box>
)

export default EmptyCart;