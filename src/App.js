import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './style/app.css'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
 
 
function App() {
 return (
   <div className="App">
     <Router>
       <NavBar/>
       <Switch>
        
         <Route exact path="/signup" render={() => {
           return <SignUp />
         }}/>
 
         <Route exact path="/login" render={() => {
           return <LogIn />
         }}/>
 
       </Switch>
 
     </Router>
   </div>
 );
}
 
export default App;
