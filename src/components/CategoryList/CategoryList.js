import React from 'react'
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const CategoryBar = styled(Box)`
    padding:0;
    display:flex;
    justify-content:center;
    padding:13px;
    flex-wrap:wrap;
    align-content: flex-start;
    margin-bottom:16px;
`
const ItemContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-text: center;
    margin-right:12px;
    list-style:none;
    font-size:24px;
    color:black;
    text-decoration:none;
    margin:0;
    align-content: stretch;
    padding:8px;
`
const categoryList = [
    "Mochilas", "Relojes", "Books", 
    "Garden", "Electronics", "Beauty",
    "Computers"
]

var imgSize = 32;

const ItemContainerList = categoryList.map((name,index) =>(
    <ItemContainer to={`/mercancia/${name}`} key={index}>
        <img alt={"icon of categorie"} height={`${imgSize}px`} width={`${imgSize}px`}  src={require(`../../statics/${name}.png`)} />
        <div>{name}</div>
    </ItemContainer>
))



function CategoryList(){
    
    return(
            
        <div>
            <CategoryBar>
                {
                    ItemContainerList
                }
            </CategoryBar>   
        </div>

    )
}

export default CategoryList