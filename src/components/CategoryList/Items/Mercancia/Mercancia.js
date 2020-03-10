
import React, {useState,useEffect } from "react";
import {Box,Container, InputLabel, MenuItem, 
         FormControl, Select, Card } from "@material-ui/core"

import Articulo from "./Articulo";
import "./styles.css"
import axios from "axios";

const ordenar = ["a-z","z-a","menor-mayor","mayor-menor"].map((item)=>{
    return(
        <MenuItem key={item} value={item}>{item}</MenuItem>
    )
})

function Mercancia({match}){
    const categoriaUrl = match.params.id;
    const [articulos,setArticulos] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:4000/api/article/${categoriaUrl}`;
        axios.get(url).then((req)=>{
            console.log(req)
            setArticulos(req.data)
            setLoadingState(false)

        })
    },[])



    const makeCard = (item) =>{
        return(
            <Card key={item.codigo} className={"item"}>
                <p>{item.nombre}</p>
                <p>{item.precio}</p>
            </Card> 
        )
    }


    const fakeList = articulos.map((item,key)=>(
            <Articulo key={key} item={item} />
    ))

    const [setList] = useState();
    const [isLoading,setLoadingState] = useState(true);
    const [orden,setOrden] = useState("");

    //Devuelve una Card list nuevo ordenado en orden alfabetico en base del nombre
    function nuevoOrden(orden){

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
                console.log(orden)
                var arr = items.sort((a,b)=>{
                    
                    return Number(a.precio) - Number(b.precio)
                })

                return arr;
            }
        }else if(orden === "mayor-menor"){
            return function(items){
                console.log(orden)
                var arr = items.sort((a,b)=>{
                    
                    return Number(b.precio) - Number(a.precio)
                })

                return arr;
            }
        }
    }

    const handleClickSelect = (event) =>{
        setOrden(event.target.value)
        var nuevaLista = nuevoOrden(event.target.value)
        // setList(lista.map(makeCard))
        
    }

    return (
       <Container className={"wrapper"}>
        {
            isLoading ? 
            <h1>Fetching Mercancia</h1>
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
                        value={orden}
                        onChange={handleClickSelect}
                        
                    >
                       {ordenar}
                    </Select>
               </FormControl>
               </form>
            </Box> 
            </Box>
           <Box className={"content"}>
                {fakeList}
           </Box>
            </div>
             
        }
       </Container>
    )
}

export default Mercancia




