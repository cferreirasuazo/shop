import {FETCH_CLIENT,SET_LOG, UPDATE_CLIENT} from "../actions/clientActions";
import produce from "immer"
import updateClient from "../utils/updateClient"

var initialState = {
    client: {},
    islogged: false 
}


export default function clintReducer(state = initialState,action){
   return produce(state, (draft)=>{
    switch(action.type){
        case FETCH_CLIENT:
            
            return{
                ...draft,client:action.payload
            }
        case  UPDATE_CLIENT:
                //You have to return the draft everytime you change a value
                draft.client = updateClient(draft.client,action.payload)
                return draft;
        case SET_LOG:
            return{
                ...draft,islogged:action.payload
            }

        default:
            return draft
    }
   })
}