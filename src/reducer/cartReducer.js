import {ADD_ARTICLE, DELETE_ARTICLE,CLEAN_CART,FETCH_ARTICLES,ADDTOCART} from "../actions/cartActions" ;  

var initialState = {
    articles:[
     
    ]

}

export default function cartReducer (state = initialState,action){
    switch(action.type){
        case ADD_ARTICLE:
            return 
        case DELETE_ARTICLE:
            return Object.assign({},state,{
                articles: state.articles.filter((article)=>{
                    return article._id !== action.payload
                })
            })
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