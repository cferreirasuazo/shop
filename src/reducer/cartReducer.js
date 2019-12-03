import {ADD_ARTICLE, REMOVE_ARTICLE,CLEAN_CART,FETCH_ARTICLES} from "../actions/cartActions" ;  

var initialState = {
    articles:[],

}

export default function cartReducer (state = initialState,action){
    switch(action.type){
        case ADD_ARTICLE:
            state.push(action.articulo)
            return state    
        case REMOVE_ARTICLE:
            state.pop();
            return state;
        case CLEAN_CART:
            return [];
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        default:
            return state
    }
}