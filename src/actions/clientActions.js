import axios from "axios";
export const FETCH_CLIENT="FETCH_CLIENT";
export const UPDATE_CLIENT="UPDATE_CLIENT";
export const LOGGIN="LOGGIN";
export const UPDATE_ACCOUNT="UPDATE_ACCOUNT";
export const IS_LOGGED="IS_LOGGED";
export const NOT_LOGGED="NOT_LOGGED";
export const SET_LOG="SET_LOG";

import {FETCH_ARTICLES} from "./cartActions";

export const registerClient = (cliente) => {
    const url = "http://localhost:4000/api/register"

    return (dispatch) =>{
        axios.post(url, {cliente}).then((res)=>{
            console.log(res.data)
        })
    }
}

export const updateClient = (client) =>{
    console.log(client)
    return {
        type:UPDATE_CLIENT,
        payload: client
    }
}

export const fetchClient = (cliente) => {
    
    const url = `http://localhost:4000/api/login`;   
    return (dispatch) => (
        new Promise(function(resolve,reject){
            axios.post(url,{cliente})
            .then((response)=>{
                console.log(response.data.cliente)
                dispatch({
                    type:FETCH_CLIENT,
                    payload:response.data.cliente
                });
              localStorage.setItem("client", JSON.stringify(response.data.cliente))
                resolve(response)
                dispatch({
                   type:FETCH_ARTICLES,
                   payload:response.data.articulos
                });
              localStorage.setItem("cart", JSON.stringify(response.data.articulos))
                dispatch({
                   type:SET_LOG,
                   payload:true
                })
               
            }).catch((err)=>{   
                reject(err)
                
            })
        })
    )
}
