import React from 'react'
import sun from '../assets/sun-svgrepo-com.svg'
import {Link} from 'react-router-dom'
 
export default function NavBar() {
   return (
       <div id="navbar">
           <div id='logo'>
               <img className="logo" src={sun} />
               <div id="siteName">Hot Girl Summer</div>
           </div>
           <div id='links'>
               <Link className="navLink" to="/signup">sign up</Link>
               <Link className="navLink" to="/login">login</Link>
           </div>
       </div>
   )
}
 
 
