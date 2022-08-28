import React, {useState} from "react"
import MovieItem from "./MovieItem"
import MovieSearchForm from "./MovieSearchForm"
import {useSelector, useDispatch} from "react-redux"

export default function SearchMovie(){
    const {query} = useSelector(state => state.form) 
    const {movieItems} = useSelector(state => state.form)
    
    return (
        <div className = "searchMovie">
            <h1>React Movie Search</h1>
            <MovieSearchForm />
            {movieItems.length > 0 && movieItems.filter(movie => movie.poster_path).map(movie => <MovieItem movie = {movie} key ={movie.id}/> )}
        </div>
    )
}
