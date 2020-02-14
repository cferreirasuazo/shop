import {FETCH_CLIENT,SET_LOG} from "../actions/clientActions";

var initialState = {
    client: {},
    islogged: false 
}


export default function clintReducer(state = initialState,action){
    switch(action.type){
        case FETCH_CLIENT:
            return{
                ...state,client:action.payload
            }
        case SET_LOG:
            console.log(action.payload)
            return{
                ...state,islogged:action.payload
            }
        default:
            return state
    }
}