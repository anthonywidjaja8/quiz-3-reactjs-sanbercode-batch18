import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import { LoginContext } from "./loginContext"
import "./public/css/style.css"

class Logout extends React.Component {
    static contextType = LoginContext

    constructor(props) {
        super(props)
    }

    render() {
        const [login, setLogin, input, setInput] = this.context
        setLogin({
            enableEdit: false,
            logout: false
        })
        setInput({
            username : '',
            password : '',
            enableEdit: false, 
            logout: false
        })
        alert("Logout berhasil")
        return (
            (<Redirect to="/"/>)
        )
    }
}

export default Logout