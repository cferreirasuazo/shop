import React, {useEffect,useReducer} from "react";
import { Container} from "@material-ui/core";
import axios from "axios";
import Loading from "../Loading/Loading";
import {reducer,initialState} from "./Reducer";
import {HomeBlock,Categorie, Title} from "./styles";

const Home = (props) => {

    const [state,dispatch] = useReducer(reducer,initialState)
    
    useEffect(()=>{
        const url = "http://localhost:4000/api/categorias";
        axios.get(url).then((data)=>{
            dispatch({type:"fetch_categories",payload:data.data})
            dispatch({type: "set_loading",payload:false})
        })
           
    },[])


    const Categories = state.categories.map((categorie)=>(
        <Categorie key={categorie._id} to={`/mercancia/${categorie.nombre}`}>
            <Title key={categorie.name}>{categorie.nombre}</Title>
        </Categorie>
    ))
    return(
        <Container className={"article"}>
            {
                !state.isLoading
                ? 
                
                <HomeBlock>
                    {Categories}
                </HomeBlock> 
                :
                 <Loading></Loading>
            }
            
        </Container>
    )
}


export default Home;