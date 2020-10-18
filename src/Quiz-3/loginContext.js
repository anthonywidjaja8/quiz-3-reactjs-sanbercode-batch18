import React, { useState, useEffect, createContext } from "react"

export const LoginContext = createContext()

export const LoginProvider = props => {
    const [login, setLogin] =  useState({
        username : 'admin',
        password : 'admin',
        enableEdit : false, 
        logout: false
    })
    const [input, setInput] = useState({
        username : '',
        password : '',
        enableEdit : false, 
        logout: false
    })

    return (
        <LoginContext.Provider value={[login, setLogin, input, setInput]}>
            {props.children}
        </LoginContext.Provider>
      )
}