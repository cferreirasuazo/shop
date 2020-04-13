
import React, {useState,useEffect } from "react";
import {Box,Container, InputLabel, MenuItem, 
         FormControl, Select } from "@material-ui/core"

import Articulo from "./Articulo";
import "./styles.css"
import axios from "axios";
import Loading from "../../../Loading/Loading";

const SortingList = ["a-z","z-a","menor-mayor","mayor-menor"].map((item)=>{
    return(
        <MenuItem key={item} value={item}>{item}</MenuItem>
    )
})

function Mercancia({match}){
    const categoryUrl = match.params.id;
    const [articles,setArticles] = useState([]);
    const [isLoading,setLoadingState] = useState(true);
    const [sortBy,setSortBy] = useState("");

    useEffect(()=>{
        const url = `http://localhost:4000/api/article/${categoryUrl}`;
        axios.get(url).then((req)=>{

            setArticles(req.data)
            setLoadingState(false)

        })
    },[])

    const ListUrls = articles.map((item,key)=>(
            <Articulo key={item._id} item={item} />
    ))

    

    //function to handler sorting for components
    function sortByHandler(orden){

        if(orden === "a-z"){
            return function(items){
                var arr = items.sort((a,b)=>{
                      return a["nombre"].localeCompare(b["nombre"]);})
                
                return arr
            }
        }else if(orden === "z-a"){
            return function(items){
                var arr = items.sort((a,b)=>{
                      return b["nombre"].localeCompare(a["nombre"]);})
                
                return arr
            }
        }else if(orden === "menor-mayor"){
            return function(items){
                var arr = items.sort((a,b)=>{
                    
                    return Number(a.precio) - Number(b.precio)
                })

                return arr;
            }
        }else if(orden === "mayor-menor"){
            return function(items){
            
                var arr = items.sort((a,b)=>{
                    
                    return Number(b.precio) - Number(a.precio)
                })

                return arr;
            }
        }
    }

    const handleClickSelect = (event) =>{
        setSortBy(event.target.value)
        sortByHandler(event.target.value)(articles)
    }

    return (
       <Container className={"mercancia"}>
        {
            isLoading ? 
            <Loading></Loading>
            :<div>
                             <Box className="buscador">               
           <Box>
               <h1 className={""} >Mercancia disponible</h1>
           </Box>
           <Box>
               <form className={"form"}>

               <FormControl className={"select"}>
               <InputLabel  htmlFor="orden">Ordenar por </InputLabel>
                    <Select
                        value={sortBy}
                        onChange={handleClickSelect}
                        
                    >
                       {SortingList}
                    </Select>
               </FormControl>
               </form>
            </Box> 
            </Box>
           <Box className={"content"}>
                {ListUrls}
           </Box>
            </div>
             
        }
       </Container>
    )
}

export default Mercancia




