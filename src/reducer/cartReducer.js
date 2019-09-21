import {AGREGAR_ARTICULO,FETCH_ARTICULOS,ELIMINAR_ARTICULO,LIMPIAR_CARRITO} from "../actions/cartActions" ;  

export default function cartReducer (state = [],action){
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