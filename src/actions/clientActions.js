import axions from "axios";

export const FETCH_CLIENT="FETCH_CLIENT";
export const UPDATE_CLIENT="UPDATE_CLIENT";
export const LOGGIN="LOGGIN";
export const UPDATE_ACCOUNT="UPDATE_ACCOUNT";


export const fetchClient = (id) => {
    const url = `http://localhost:4000/api/cliente/${id}`;   
    return (dispatch) => {
        axios.get(url)
            .then((response)=>{
                dispatch({
                    type:FETCH_CLIENT,
                    payload:response.data[0][0]
                })
            }).catch((err)=>{   
               console.log(err) 
            })
    }
}

export const fetchData