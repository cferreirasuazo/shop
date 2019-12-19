import {ADD_ARTICLE, REMOVE_ARTICLE,CLEAN_CART,FETCH_ARTICLES,ADDTOCART} from "../actions/cartActions" ;  

var initialState = {
    articles:[
        {
            "codigo":"123456789",
            "nombre":"Qwerty"
        },
        {
            "codigo":"234567891",
            "nombre":"Moldecai"
        },
        {
            "codigo":"asdfghjkl",
            "nombre":"ZXCVB"
        },
        {
            "codigo":"987654321",
            "nombre":"FGHJKL"
        }
    ],

}

export default function cartReducer (state = initialState,action){
    switch(action.type){
        case ADD_ARTICLE:
            return 
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
        case ADDTOCART:

            return {
                articles:[...state.articles,action.payload]
            }
            
        default:
            return state
    }
}