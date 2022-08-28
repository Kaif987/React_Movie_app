import React from "react"

export default function MovieItem({movie}){
    console.log(movie)
    return (
        <div className = "movie-item">
            <img src= {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
             />
            <div>
            <h3>{movie.title}</h3>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATINGS: {movie.vote_average}</small></p>
            <p>{movie.overview}</p>
            </div>
        </div>
    )
}
