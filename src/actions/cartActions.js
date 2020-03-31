import axios from "axios";
export const ADD_ARTICLE="ADD_ARTICLE";
export const DELETE_ARTICLE="DELETE_ARTICLE";
export const FETCH_ARTICLES="FETCH_ARTICLES";
export const CLEAN_CART="CLEAN_CART";
export const ADDTOCART="ADDTOCART";

export const fetchArticles = () => {
    const url = "http://localhost:4000/api/articles";    
    return (dispatch) => {
        axios.get(url)
            .then((response)=>{
                dispatch({
                    type:FETCH_ARTICLES,
                    payload:response.data
                })
                
            }).catch((err) => {
                console.log(new Error("CatastrophicFailure"))
            })        
    }
}


export const addArticle = (article) => {
    return {type:ADD_ARTICLE, article }
}

export const addToCart = (request) => {
    const url = `http://localhost:4000/api/add-to-cart`;

    return (dispatch) =>(
        new Promise(function(resolve,reject){
            axios.post(url,{request}).then((response) => {
                var {data} = response
                dispatch({
                    type:ADDTOCART,
                    payload:data
                })

                resolve(false)
            })
        })
    )
}


export const deleteArticle = (codigo) => {
    return{
        type:DELETE_ARTICLE,
        payload:codigo
    }
}

export function cleanCart(){
    return {
        type: CLEAN_CART
    }
}


