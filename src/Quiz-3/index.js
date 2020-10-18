import React, { useContext } from "react"
import logo from "./public/img/logo.png"
import { MovieContext } from "./MovieCRUD/movieContext"
import { MovieProvider } from "./MovieCRUD/movieContext"
import { LoginContext } from "./loginContext"
import "./public/css/style.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import About from './about'
import MovieListEditor from "./MovieCRUD/movieMain"
import Login from "./login"
import Logout from "./logout"

class Application extends React.Component {
    static contextType = LoginContext

    constructor(props) {
        super(props)
    }
    
    render() {
        const [login, setLogin, input, setInput] = this.context
        return (
            <Router>
                <div>
                    <header>
                    <img id="logo" src={logo} width="200px" />
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/About">About</Link>
                                </li>
                                {login.enableEdit &&
                                    <li>
                                        <Link to="/Edit-Movie">Movie List Editor</Link>
                                    </li>
                                }
                                {!login.logout &&
                                    <li>
                                        <Link to="/Login">Login</Link>
                                    </li>
                                }
                                {login.logout &&
                                    <li>
                                        <Link to="/Logout">Logout</Link>
                                    </li>
                                }
                            </ul>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/About" component={About}/>
                        <section>
                            {login.enableEdit &&
                                <Route exact path="/Edit-Movie" component={MovieListEditor}/>
                            }
                            <Route exact path="/Login" component={Login}/>
                            <Route exact path="/Logout" component={Logout}/>
                        </section>              
                    </Switch>
                </div>
            </Router>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <MovieProvider>
                <Index/>
            </MovieProvider>
        )
    }
}

class Index extends React.Component {
    static contextType = MovieContext

    constructor(props) {
        super(props)
    }

    render() {
        const [daftarMovie] = this.context
        return(
            <>
                <section >
                <h1>Daftar Film Film Terbaik</h1>
                {
                    daftarMovie !== null && daftarMovie.map((item, index)=>{
                        return(
                            <div id="article-list">
                                <div className="article">
                                <h3>{item.title}</h3>
                                <div style={{display:"inline-block"}}>
                                    <div className="content">
                                        <img src={item.image_url} alt="alt"/>
                                    </div>
                                    <div className="details">
                                        <h3>Rating {item.rating}</h3>
                                        <h3>Durasi : {Math.round(item.duration/60)} jam</h3>
                                        <h3>Genre : {item.genre}</h3>
                                    </div>
                                </div>
                                <p>
                                    <strong>Description : </strong>{item.description}
                                </p>
                                </div>
                            </div>
                        )
                    })
                }
                </section>
                <footer>
                    <h5>copyright &copy; 2020 by Sanbercode</h5>
                </footer>
            </>
        )
    }   
}

export default Application