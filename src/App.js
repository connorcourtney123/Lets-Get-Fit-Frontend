import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import env from 'react-dotenv'
import axios from 'axios'
import './style/app.css'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import WorkoutSummary from './pages/WorkoutSummary'
import NutritionSummary from './pages/NutritionSummary'
import NutritionLog from './pages/NutritionLog'
 
 
function App() {
 const [user, setUser] = useState({})
 
 
 const verifyUser = async () => {
   try{
     // console.log('verify userId sent:')
     // console.log(localStorage.getItem('userId'))
 
     let response = await axios.get(`${env.BACKEND_URL}/user/verify`, {
       headers: {
         Authorization: localStorage.getItem('userId')
       }
     })
 
     if(response.status === 200){
       setUser({username: response.data.username, userId: response.data.id})
       localStorage.setItem('username', response.data.username)
     }
 
   }catch(error){
     console.log(error)
   }
 }
 useEffect(() => {
   verifyUser()
 }, [])
 
 
 
 
 return (
   <div className="App">
     <Router>
       <NavBar user={user} setUser={setUser}/>
       <Switch>
        
         <Route exact path="/signup" render={() => {
           return <SignUp user={user} setUser={setUser} />
         }}/>
 
         <Route exact path="/login" render={() => {
           return <LogIn user={user} setUser={setUser}/>
         }}/>
 
         <Route exact path="/nutritionSummary" render={() => {
           return <NutritionSummary user={user}/>
         }}/>
 
         <Route exact path="/workoutSummary" render={() => {
           return <WorkoutSummary user={user}/>
         }}/>
 
         <Route exact path="/dailyLog" render={() => {
           return <NutritionLog user={user}/>
         }}/>
 
       </Switch>
 
     </Router>
   </div>
 );
}
 
export default App;
 
 
