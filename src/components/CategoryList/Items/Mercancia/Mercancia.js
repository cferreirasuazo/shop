
import React, {useState} from "react";
import {Box,Container, InputLabel, MenuItem, 
         FormControl, Select, Card } from "@material-ui/core"

import "./styles.css";
import fakeItems from "../../../../fakeItems";

const lista = ["Chair","Bacon","Computer","Chicken","Soap"].map((item)=>{
    return(
        <MenuItem key={item} value={item}>{item}</MenuItem>
    )
})
const ordenar = ["a-z","z-a","menor-mayor","mayor-menor"].map((item)=>{
    return(
        <MenuItem key={item} value={item}>{item}</MenuItem>
    )
})

function Mercancia({match}){

    const makeCard = (item) =>{
        return(
            <Card key={item.codigo} className={"item"}>
                <p>{item.nombre}</p>
                <p>{item.precio}</p>
            </Card> 
        )
    }

    const [list,setList] = useState( fakeItems.map(makeCard))
    const [orden,setOrden] = useState("") 

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
        var lista = nuevaLista(fakeItems)
        setList(lista.map(makeCard))
        
    }

    return (
       <Container className={"wrapper"}>
           <Box className="buscador">               
           <Box>
               <h1 className={""} >Mercancia disponible</h1>
           </Box>
           <Box>
               <form className={"form"}>
               <FormControl className={"select"}>
                <InputLabel  htmlFor="categorias">Categorias</InputLabel>
                    <Select>
                       {lista}
                    </Select>
               </FormControl>

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
                {list}
           </Box>
       </Container>
    )
}

export default Mercancia




