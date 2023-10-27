import React from 'react'
import Search from "../assets/search.png"
import {signInWithPopup} from "firebase/auth"
import { auth,googleProvider } from '../firebase.config'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const handleLogin = () =>{
        signInWithPopup(auth, googleProvider).then(async(result)=>{
            const user = result.user
            localStorage.setItem("user",user.uid)

        })
    }
    useEffect(() => {
        const checkUser = localStorage.getItem("user")
        if(checkUser){
            navigate("/")
        }
    }, [])
  return (
    <div className='flex items-center bg-gray-300 justify-center h-[100vh]' >
        <div>
            <button onClick={handleLogin} className='px-8 py-4 rounded-lg bg-white  flex items-center justify-center ' >
                <img src={Search} className="w-[30px] mr-3 " />
                Login With Google
            </button>
        </div>
    </div>
  )
}

export default Login