import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import env from 'react-dotenv'
import axios from 'axios'
 
export default function LogIn(props) {
 
   const history = useHistory()
 
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
 
   const logIn = async (e) => {
       try{
           e.preventDefault()
 
           let response = await axios.post(`${env.BACKEND_URL}/user/login`, {
               username: username,
               password: password
           })
 
           props.setUser({username: response.data.username, userId: response.data.userId})
 
           localStorage.setItem('userId', response.data.userId)
           localStorage.setItem('username', response.data.username)
          
           history.push({
               pathname: '/nutritionSummary',
               state: { user: props.user }
           })
 
       }catch(error){
           console.log(error)
       }
   }
 
 
 
   return (
       <div className="page">
           <form className="user_form">
               <input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
               <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
               <button onClick={(e) => logIn(e)}>log in</button>
           </form>
       </div>
   )
}
 
 
