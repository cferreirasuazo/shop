import {ADD_ARTICLE, REMOVE_ARTICLE,CLEAN_CART} from "../actions/cartActions" ;  

export default function cartReducer (state = [1,2,3,4,5,6,7,8,9,10],action){
    switch(action.type){
        case ADD_ARTICLE:
            state.push(action.articulo)
            return state    
        case REMOVE_ARTICLE:
            state.pop();
            return state;
        case CLEAN_CART:
            return [];
        default:
            return state
    }
}