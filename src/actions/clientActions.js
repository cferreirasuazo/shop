import axios from "axios";
export const FETCH_CLIENT="FETCH_CLIENT";
export const UPDATE_CLIENT="UPDATE_CLIENT";
export const LOGGIN="LOGGIN";
export const UPDATE_ACCOUNT="UPDATE_ACCOUNT";
export const IS_LOGGED="IS_LOGGED";
export const NOT_LOGGED="NOT_LOGGED";
export const SET_LOG="SET_LOG";
import {FETCH_ARTICLES} from "./cartActions";

export const fetchClient = (cliente) => {
    
    const url = `http://localhost:4000/api/login`;   
    return (dispatch) => {
        axios.post(url,{cliente})
            .then((response)=>{

              
                dispatch({
                    type:FETCH_CLIENT,
                    payload:response.data.cliente
                });
                localStorage.setItem("client", JSON.stringify(response.data.cliente))
                
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
               console.log(err) 
            })
    }
}






// export const fetchClient = (id) => {
//     const url = `http://localhost:4000/api/cliente/${id}`;   
//     return (dispatch) => {
//         axios.get(url)
//             .then((response)=>{
//                 dispatch({
//                     type:FETCH_CLIENT,
//                     payload:response.data[0][0]
//                 });
//                dispatch({
//                    type:FETCH_ARTICLES,
//                    payload:response.data[1]
//                })
//             }).catch((err)=>{   
//                console.log(err) 
//             })
//     }
// }






