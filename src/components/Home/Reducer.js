exports.initialState = {
    categories:[],
    isLoading: true
}


exports.reducer = (state,action) =>{
    switch(action.type){
        case "fetch_categories":
            return {
                ...state,categories:action.payload
            }
        case "set_loading":
            return {
                ...state,isLoading: action.payload
            }
        default:
            return state
    }
}
