import {AGREGAR_ARTICULO,FETCH_ARTICULOS,ELIMINAR_ARTICULO,LIMPIAR_CARRITO,agregarArticulo} from "../actions/cartActions" ;  

export default function cartReducer (state = [1,2,3,4,5,6,7,8,9,10],action){
    switch(action.type){
        case AGREGAR_ARTICULO:
            state.push(action.articulo)
            return state    
        case ELIMINAR_ARTICULO:
            state.pop();
            return state;
        case LIMPIAR_CARRITO:
            return [];
        default:
            return state
    }
}