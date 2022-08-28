const initialState = {
    query: "",
    movieItems: []
}

export function handleChange(e){
    return {
        type: "HANDLE_CHANGE",
        payload: e.target.value
    }
}

export function handleSubmit(){
    return (dispatch,getState) =>{
        const {query} = getState().form
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b8a8c1a6913dba4021cfa8f6036d07fd&language=en-US&query=${query}&page=1&include_adult=false`
        fetch(url)
            .then(response => response.json())
            .then(data => dispatch({type:"HANDLE_SUBMIT",payload: data.results}))
    }
}


export default function formReducer(state = initialState, action){
    switch(action.type){
        case "HANDLE_CHANGE":
            return {
                ...state,
                query: action.payload
            }
            
        case "HANDLE_SUBMIT":
            return {
                ...state,
                movieItems: action.payload
            }
            
        default:
            return state
    }
}