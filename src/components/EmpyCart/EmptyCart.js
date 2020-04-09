import React from "react";
import {Container, Paper, Box} from "@material-ui/core";

import "./styles.css";
import BlockIcon from '@material-ui/icons/Block';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import styled from 'styled-components';

const EmptyCart = () => (
        <Container className={"empty_cart-container"}>
            <Box className={"empty_cart-box"}>
                <RemoveShoppingCartIcon fontSize="large" className={"icon"}></RemoveShoppingCartIcon>
                <p>It looks like your shopping cart is empty, try to buy something to fill it</p>
            </Box>
        </Container>
)

export default EmptyCart;