import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {InputLabel, MenuItem, 
         FormControl, Select,InputBase} from "@material-ui/core"


const lista = ["Chair","Bacon","Computer","Chicken","Soap","Mouse","Tuna","Car","Shoes","Table","Hat","Keyboard"]
const ordenar = ["A-Z","Z-A","Menor-Mayor","Mayor-Menor"]


function Mercancia(){
    return (
       <Container>
           <Box>
               <form>
                   <FormControl>
                       <InputLabel htmlFor="custome-input" />
                   </FormControl>
               </form>
           </Box> 
       </Container>
    )
}

export default Mercancia