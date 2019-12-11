import axions from "axios";

export const FETCH_CLIENT="FETCH_CLIENT";
export const UPDATE_CLIENT="UPDATE_CLIENT";
export const LOGGIN="LOGGIN";
export const UPDATE_ACCOUNT="UPDATE_ACCOUNT";


export const fetchClient = () => {
    const url = "http://localhost:4000/api/cliente";   
    return (dispatch) => {
        axios.get(url)
            .then((response)=>{

            }).catch((err)=>{
               console.log(err) 
            })
    }
}

export const fetchData