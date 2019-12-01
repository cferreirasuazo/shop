import axios from "axios";

export const ADD_ARTICLE="ADD_ARTICLE";
export const REMOVE_ARTICLE="REMOVE_ARTICLE";
export const FETCH_ARTICLES="FETCH_ARTICLES";
export const CLEAN_CART="CLEAN_CART";



export const fetchArticles = () => {
    const url = "http://localhost:4000/api/articles";    
    return (dispatch) => {
        axios.get(url)
            .then((response)=>{
                dispatch({
                    type:FETCH_ARTICLES,
                    payload:response.data
                })
            })        
    }
}


export const addArticle = (article) => {
    return {type:ADD_ARTICLE, article }
}

export function removeArticle(id){
    return{
        type:REMOVE_ARTICLE,id
    }
}

export function cleanCarto(){
    return {
        type: CLEAN_CART
    }
}


