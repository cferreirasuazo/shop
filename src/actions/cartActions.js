/*

    action types

*/


export const AGREGAR_ARTICULO="AGREGAR_ARTICULO";
export const ELIMINAR_ARTICULO="ELIMINAR_ARTICULO";
export const FETCH_ARTICULOS="FETCH_ARTICULOS";
export const LIMPIAR_CARRITO="LIMPIAR_CARRITO";

export function agregarArticulo(articulo){
    return {
        type:AGREGAR_ARTICULO,articulo
    }
}

export function eliminarArticulo(id){
    return{
        type:ELIMINAR_ARTICULO,id
    }
}

export function limpiarCarrtio(){
    return {
        type: LIMPIAR_CARRITO
    }
}


