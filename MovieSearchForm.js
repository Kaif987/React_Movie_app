import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {handleChange, handleSubmit} from "./Redux/formReducer"


let MovieSearchForm = () => {
    const {query} = useSelector(state => state.form)
    const dispatch = useDispatch()
    
    return (
        <form onSubmit ={(e) => {
            e.preventDefault()
            dispatch(handleSubmit())
            }
        } className= "movie-search-form">
                <div className = "search-div">
                    <label>MOVIE NAME</label>
                    <input name= "query" placeholder="i.e. JURASSIC PARK" value = {query}
                    onChange = {(e) => dispatch(handleChange(e))} />
                </div>                 
                <button>Search</button>
        </form>
    )
}

export default MovieSearchForm