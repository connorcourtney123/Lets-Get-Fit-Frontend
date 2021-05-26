import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import env from 'react-dotenv'
import axios from 'axios'
 
export default function SignUp() {
 
   const history = useHistory()
 
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
 
   const signup = async (e) => {
       // try{
       //     e.preventDefault()
 
       //     let response = await axios.post(`${env.BACKEND_URL}/user/SignUp`, {
       //         username: username,
       //         password: password
       //     })
 
       //     props.setUser({username: response.data.username, userId: response.data.userId})
 
       //     localStorage.setItem('userId', response.data.userId)
 
       //     // history.push('/')
 
       // }catch(error){
       //     console.log(error)
       // }
   }
 
 
 
 
   return (
       <div className="page">
           <form className="user_form">
               <input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
               <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
               <button onClick={(e) => SignUp(e)}>sign up</button>
           </form>
       </div>
   )
}
 
 
