import React from "react";
import styled from "styled-components";
import StorefrontIcon from '@material-ui/icons/Storefront';

const IconBox = styled.div`
    display:flex;
    cursor: default;
    justify-content: space-evenly;
    align-items: center;
`

const Title = styled.h1`
    font-size:25px;
    margin-left: 24px;
`

const HomeIcon = () =>(
    <IconBox>
        <StorefrontIcon></StorefrontIcon>
        <Title>E-Commerce</Title>
    </IconBox>
)

export default HomeIcon;