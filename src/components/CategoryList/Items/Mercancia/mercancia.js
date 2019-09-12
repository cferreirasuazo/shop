//CREAR funcion para genrar Grid utilizando ese componente
//Tomar 3-4 items para hacer una fila y luego insertarlo como en 
//el ejemplo https://material-ui.com/components/grid/

import React from "react";
import styled from "styled-components";
import {Box,Button,Container, InputLabel, MenuItem, 
         FormControl, Select,InputBase, TextField, Card } from "@material-ui/core"

import "./styles.css";
import items from "../../../../fakeItems";


const lista = ["Chair","Bacon","Computer","Chicken","Soap"].map((item)=>{
    return(
        <MenuItem value={item}>{item}</MenuItem>
    )
})
const ordenar = ["A-Z","Z-A","Menor-Mayor","Mayor-Menor"].map((item)=>{
    return(
        <MenuItem value={item}>{item}</MenuItem>
    )
})

// const items = ['Lorem',
//                'ipsum',
//                'sed',
//                'vitae',
//                'placerat',
//                'aliquet',
//                'consequat' ].map((item)=>{
//                     return(
//                         <Card className={"item"}>{item}</Card>
//                     )
//                });

const list = items.map((item)=>{
    return (
        <Card className={"item"}>{item.nombre}</Card>
    )
})





function Mercancia(){
    
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
                <InputLabel  htmlFor="ordernar">Ordenar Por</InputLabel>
                    <Select>
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




