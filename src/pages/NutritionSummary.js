import axios from 'axios'
import env from 'react-dotenv'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PieChart from '../components/PieChart'
 
export default function NutritionSummary(props) {
 
   const [protein, setProtein] = useState(1)
   const [carbs, setCarbs] = useState(1)
   const [fats, setFats] = useState(1)
 
   const calcAverage = (logs) => {
       if(logs.length>0){
           let c = 0
           let p = 0
           let f = 0
           for(let i=0; i<logs.length; i++){
               c += logs[i].carbs
               p += logs[i].protien
               f += logs[i].fat
           }
           p = p/logs.length
           c = c/logs.length
           f = f/logs.length
           console.log(p)
           console.log(c)
           console.log(f)
           setCarbs(c)
           setProtein(p)
           setFats(f)
       }
 
   }
 
 
   const fetchNutrLogs = async () => {
       try{
 
           // console.log('props:')
           // console.log(props.user.userId)
 
 
           let response = await axios.get(`${env.BACKEND_URL}/nutrition/all`, {
               headers: {
                 'Authorization': props.user.userId
               }
             });
          
           //   console.log('fetchNutr response:')
           //   console.log(response)
 
             if(response.data){
               calcAverage(response.data.nutrition)
             }
            
 
       }catch(error){
           console.log(error)
       }
   }
   useEffect(() => {
       fetchNutrLogs()
   }, [props.user])
 
 
 
 
 
 
   return (
       <div className='nutrSumPage'>
           <div className='chart'>
               <PieChart protein={30} fats={30} carbs={40}/>
               <div className='chartTitle'>
                   <div>Recommended</div>
                   <div>Daily Nutrition</div>
               </div>
           </div>
           <div className='chart'>
               <div className='chartTitle'>
                   <div>{props.user.username}'s</div>
                   <div>Average Daily Nutrition</div>
               </div>
               <PieChart protein={protein} fats={fats} carbs={carbs}/>
           </div>
           <div className='buttonHolder'>
               <Link className='button'
                   to={{
                       pathname:'/dailyLog',
                       state: {user: props.user}
                   }}>Daily Logs &rarr;</Link>
           </div>
       </div>
   )
}
 
 

 


