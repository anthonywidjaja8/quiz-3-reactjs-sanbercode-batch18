import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import { LoginContext } from "./loginContext"
import "./public/css/style.css"

const Login = () => {
    const [login, setLogin, input, setInput] = useContext(LoginContext) 
    
    const handleSubmit = event =>{
        event.preventDefault()
    
        let username = input.username
        let password = input.password
    
        if (login.username === username && login.password === password){     
            setLogin({
                enableEdit: true,
                logout: true
            })
            alert("Login berhasil")
        }
        else {
            setInput({
                username : '',
                password : '',
                enableEdit: false, 
                logout: false
            })
            alert("Password Atau Username Salah")
        }
    }

    const handleChange = event =>{
        let typeOfInput = event.target.name
    
        if(typeOfInput === "username") {
            setInput({
                ...input, 
                username: event.target.value
            })
        } else if(typeOfInput === "password") {
            setInput({
                ...input, 
                password: event.target.value
            })
            
        }
    }
    
    return !login.logout ? (
        <>
            <div className="logbox">
                <div className="loginForm">
                    <h2>Login</h2>
                </div>
                <form className="dataForm" onSubmit={handleSubmit}>
                    <label style={{paddingTop:'13px'}}>
                        Username
                    </label>
                    <input className="inputData" type="text" required name="username" value={input.title} onChange={handleChange}/>
                    <div className="inputDataBorder"></div>
                    <label style={{paddingTop:'13px'}}>
                        Password
                    </label>
                    <input className="inputData" type="password" required name="password" value={input.title} onChange={handleChange}/>
                    <div className="inputDataBorder"></div>
                    <br/>
                    <br/>
                    <br/>
                    <button style={{alignSelf: "center"}}>Login</button>
                </form>
            </div>
        </>
    ) : (<Redirect to="/"/>)
}

export default Login