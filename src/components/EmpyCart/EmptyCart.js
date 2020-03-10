import React from "react";
import {Button, Box, Container, Paper} from "@material-ui/core";

import "./styles.css";
import BlockIcon from '@material-ui/icons/Block';



const EmptyCart = () => (
        <Container className={"empty_cart-container"}>
            <Box className={"empty_cart-box"}>
                <BlockIcon></BlockIcon>
                <p>It looks like your shopping cart is empty, try to buy something to fill it</p>
            </Box>
        </Container>
)

export default EmptyCart;