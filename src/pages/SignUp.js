import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import env from 'react-dotenv'
import axios from 'axios'
 
export default function SignUp(props) {
 
   const history = useHistory()
 
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
 
   const signup = async (e) => {
       try{
           e.preventDefault()
 
           let response = await axios.post(`${env.BACKEND_URL}/user/signup`, {
               username: username,
               password: password
           })
 
           console.log(response)
 
           if(response.data.error !== undefined){
               alert(response.data.error)
           }else{
               props.setUser({username: username, userId: response.data.userId})
 
               localStorage.setItem('userId', response.data.userId)
               localStorage.setItem('username', response.data.username)
              
               history.push({
                   pathname: '/nutritionSummary',
                   state: { user: props.user }
               })
           }
       }catch(error){
           console.log(error)
       }
   }
 
 
   return (
       <div className="page">
           <form className="user_form">
               <input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
               <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
               <button onClick={(e) => signup(e)}>sign up</button>
           </form>
       </div>
   )
}
 
 

 
