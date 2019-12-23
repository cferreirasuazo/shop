import axios from "axios";
export const FETCH_CLIENT="FETCH_CLIENT";
export const UPDATE_CLIENT="UPDATE_CLIENT";
export const LOGGIN="LOGGIN";
export const UPDATE_ACCOUNT="UPDATE_ACCOUNT";
import {FETCH_ARTICLES} from "./cartActions";




export const fetchClient = (id) => {
    const url = `http://localhost:4000/api/cliente/${id}`;   
    return (dispatch) => {
        axios.get(url)
            .then((response)=>{
                dispatch({
                    type:FETCH_CLIENT,
                    payload:response.data[0][0]
                });
               dispatch({
                   type:FETCH_ARTICLES,
                   payload:response.data[1]
               })
            }).catch((err)=>{   
               console.log(err) 
            })
    }
}

