import React from "react"
import { MovieProvider } from "./movieContext"
import DaftarMovieList from "./movieList"
import DaftarMovieForm from "./movieForm"

const MovieListEditor = () => {
    return(
      <MovieProvider>
          <DaftarMovieList/>
          <br/>
          <br/>
          <DaftarMovieForm/>
      </MovieProvider>
    )
  }
  
  export default MovieListEditor
