import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

export const MovieContext = createContext()

export const MovieProvider = props => {

    const [daftarMovie, setDaftarMovie] =  useState(null)

    useEffect(() => {
        if (daftarMovie === null){
          axios.get(`http://backendexample.sanbercloud.com/api/movies`)
          .then(res => {
              setDaftarMovie(res.data.map(el => { 
                return {
                    id: el.id, 
                    title: el.title, 
                    description: el.description, 
                    year: el.year, 
                    duration: el.duration, 
                    genre: el.genre, 
                    rating: el.rating, 
                    image_url: el.image_url
                }
            }))
          })
        }
      }, [daftarMovie])
  
    const [input, setInput] = useState({
        title: "", 
        description: "", 
        year: 2020, 
        duration: 120, 
        genre: "",
        rating: 0, 
        image_url: "", 
        id: null
    })
  
    return (
        <MovieContext.Provider value={[daftarMovie, setDaftarMovie, input, setInput]}>
            {props.children}
        </MovieContext.Provider>
    )
}