/*

    action types

*/

export const ADD_ARTICLE="ADD_ARTICLE";
export const REMOVE_ARTICLE="REMOVE_ARTICLE";
export const FETCH_ARTICLES="FETCH_ARTICLES";
export const CLEAN_CART="CLEAN_CART";


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


