import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const lista = ["Chair","Bacon","Computer","Chicken","Soap","Mouse","Tuna","Car","Shoes","Table","Hat","Keyboard"]
const ordenar = ["A-Z","Z-A","Menor-Mayor","Mayor-Menor"]


function Mercancia(){
    return (
        <div>
            <h1>Productos y Ofertas</h1>
            <Box>
                <p>Buscar</p>
                <Button>Todo</Button>
                <div>{lista}</div>
            </Box>

            <Box>
                <p>Ordenar por</p>
                <Button>Destacados</Button>
            </Box>
        </div>
    )
}

export default Mercancia