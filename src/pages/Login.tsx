import { useContext, useState } from "react"
import {useNavigate} from "react-router-dom"

export const Login = () => {
const auth = useContext()
    
const [user,setUser] = useState('')
const [password, setPassword] = useState('')

const handleLogin = async () => {
    if(user && password){
        const isLogged = await auth.signin(user, password)
        if(isLogged){
            navigate('/')
        }else {
            alert("Não deu certo.")
        }
    }
}  

    return (
        <div>        
            <h1>Login</h1>

            <input value={user} type="text" placeholder="login" />
            <br />
            <input value={password} type="password" placeholder="password" />
            <br /><br />
            <button>Login</button>
        </div>

    )
}