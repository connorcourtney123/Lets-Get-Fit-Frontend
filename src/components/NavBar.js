import React from 'react'
import sun from '../assets/sun-svgrepo-com.svg'
import {Link} from 'react-router-dom'
 
export default function NavBar(props) {
 
   const logout = () => {
       localStorage.removeItem('userId')
       localStorage.removeItem('username')
       props.setUser({})
   }
 
   if(JSON.stringify(props.user) !== '{}'){
       return(
           <div id="navbar">
           <div id='logo'>
               <img className="logo" src={sun} alt='' />
               <div id="siteName">Hot Girl Summer</div>
           </div>
           <div id='links'>
           <Link className="navLink" to="/nutritionSummary">nutrition</Link>
           <Link className="navLink" to="/workoutSummary">workouts</Link>
           <Link className="navLink" to="/login" onClick={() => logout()}>logout</Link>
           </div>
       </div>
       )
 
   }else{
       return (
           <div id="navbar">
               <div id='logo'>
                   <img className="logo" src={sun} alt=''/>
                   <div id="siteName">Hot Girl Summer</div>
               </div>
               <div id='links'>
                   <Link className="navLink" to="/signup">sign up</Link>
                   <Link className="navLink" to="/login">login</Link>
               </div>
           </div>
       )
   }
}
 
 

 
