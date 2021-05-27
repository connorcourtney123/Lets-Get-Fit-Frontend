import axios from 'axios'
import env from 'react-dotenv'
import React, {useState, useEffect} from 'react'
import PieChart from '../components/PieChart'
 
export default function NutritionLog(props) {
 
   const [date, setDate] = useState('')
   const [protein, setProtein] = useState('0')
   const [carbs, setCarbs] = useState('0')
   const [fats, setFats] = useState('0')
 
 
   const initializeToday = () => {
       let today = new Date()
 
       let month = (today.getMonth()+1).toString()
       if(month.length < 2){
           month = '0'+month
       }
       let day = today.getDate().toString()
       let year = today.getFullYear().toString()
 
       setDate(`${year}-${month}-${day}`)
 
       fetchDay()
   }
   useEffect(() => {
       initializeToday()
   }, [])
 
   const fetchDay = async () => {
       try{
           let response = await axios.post(`${env.BACKEND_URL}/nutrition`,{
               date: date
           },
           {
               headers: {
                   Authorization: props.user.userId
               }
           })
 
           if(response.data.nutrition){
               let log = response.data.nutrition
               setProtein(log.protien)
               setCarbs(log.carbs)
               setFats(log.fat)
           }else{
               setProtein(0)
               setCarbs(0)
               setFats(0)
           }
 
       }catch(error){
           console.log(error)
       }
   }
   useEffect(() => {
       fetchDay()
   }, [date])
 
   const saveLog = async () => {
       try{
           let response = await axios.post(`${env.BACKEND_URL}/nutrition/save`,{
               date: date,
               protien: protein,
               fat: fats,
               carbs: carbs
           },
           {
               headers: {
                   Authorization: props.user.userId
               }
           })
 
           console.log(response)
      
       }catch(error){
           console.log(error)
       }
   }
 
   return (
       <div className='dailyLogPg'>
          <input className='date' type="date" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
          <div className='nutrContent'>
               {/* <div className='recChart'>
                   <PieChart protein={30} fats={30} carbs={40}/>
               </div> */}
               <div className='logsChart'>
                   <PieChart protein={protein} fats={fats} carbs={carbs}/>
               </div>
               <div className='nutrValues'>
                   <div className='nutrValue'><div className='nutrLabel'>protein: </div><div><input type='number' min='0' className='nutrInput' value={protein} onChange={(e)=>{setProtein(e.target.value)}}/> grams</div></div>
                   <div className='nutrValue'><div className='nutrLabel'>carbs: </div><div><input type='number' min='0' className='nutrInput' value={carbs} onChange={(e)=>{setCarbs(e.target.value)}}/> grams</div></div>
                   <div className='nutrValue'><div className='nutrLabel'>fats: </div><div><input type='number' min='0' className='nutrInput' value={fats} onChange={(e)=>{setFats(e.target.value)}}/> grams</div></div>
                   <div id='nutrSave' className='button' onClick={() => saveLog()}>save</div>
               </div>
           </div>
       </div>
   )
}
 
 
