import {fetchClient,FETCH_CLIENT} from "../actions/clientActions";

var initialState = {
    client:{}
}


export default function clintReducer(state = initialState,action){
    switch(action.type){
        case FETCH_CLIENT:
            return{
                ...state,client:action.payload
            }
        default:
            return state
    }
}