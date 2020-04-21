import styled from "styled-components";
import {Link} from "react-router-dom";

export const HomeBlock = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 8px;
`


export const Categorie = styled(Link)`
    display: flex;
    justify-content: center;
    background-color: #3b6978;
    border-radius:5px;
    font-size:10px;
    text-decoration: none;  
`

export const Title = styled.h1`
    background-color: #84a9ac;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin: 0;
    padding: 10px;
    height: 25px;
    text-align: center;
    color:ivory;
    width:100%
`