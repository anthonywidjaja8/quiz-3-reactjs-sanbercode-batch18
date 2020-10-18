import React, { useContext } from "react"
import { MovieContext } from "./movieContext"
import axios from "axios"
import "./movie.css"

const DaftarMovieList = () => {
    const [daftarMovie, setDaftarMovie, input, setInput] = useContext(MovieContext)

    const handleDelete = event => {
        let idDataMovie = parseInt(event.target.value)
        let newDaftarMovie = daftarMovie.filter(el => el.id !== idDataMovie)
    
        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idDataMovie}`)
        .then(res => {
            console.log(res)
        })
              
        setDaftarMovie([...newDaftarMovie])
    }
      
    const handleEdit = event => {
        let idDataMovie = parseInt(event.target.value)
        let dataMovie = daftarMovie.find(x=> x.id === idDataMovie)
        setInput({
            title: dataMovie.title, 
            description: dataMovie.description, 
            year: dataMovie.year, 
            duration: dataMovie.duration, 
            genre: dataMovie.genre, 
            rating: dataMovie.rating, 
            image_url: dataMovie.image_url, 
            id: idDataMovie
          })
    }

    const handleChange = event => {
      setInput({
        ...daftarMovie,
        title: event.target.value
      })
    }

    const handleSubmit = event => {
      event.preventDefault()

      let titleDataMovie = input.title
      let newDaftarMovie = daftarMovie.filter(el => el.title === titleDataMovie)
      setDaftarMovie([...newDaftarMovie])
    }

    return(
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" value={input.title} onChange={handleChange}/>
              <button>Search</button>
            </div>
          </form>
          <h1>Daftar Film</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Year</th>
                <th>Duration</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  daftarMovie !== null && daftarMovie.map((item, index)=>{
                    let desc ;
                    if(item.description===null){
                      desc=null
                    }
                    else desc= [...item.description.substr(0, 25),..."..."]
                    let title = [...item.title.substr(0, 25),..."..."]
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{title}</td>
                        <td>{desc}</td>
                        <td>{item.year}</td>
                        <td>{item.duration}</td>
                        <td>{item.genre}</td>
                        <td>{item.rating}</td>
                        <td>
                          <button onClick={handleEdit} value={item.id}>Edit</button>
                          &nbsp;
                          <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </>
    )
}

export default DaftarMovieList