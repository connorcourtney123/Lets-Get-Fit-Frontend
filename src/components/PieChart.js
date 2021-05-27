import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'
 
// chart.js used here
// https://medium.com/@rkbhatia89/how-to-make-pie-charts-in-react-with-chart-js-64edd03fc922
// if the install method in that link (substituting 'yarn add' for 'npm') causes an error,
// install it this way 'yarn add react-chartjs-2 chart.js' instead
 
class PieChart extends Component {
 
   constructor(props){
       super(props)
 
       this.state = {
           labels: ['protein', 'fats', 'carbs'],
           datasets: [{
               data: [props.protein,props.fats,props.carbs],
               backgroundColor: ['#f4a415', '#f2deb6', '#97d4da']
           }]
 
       }
   }
   componentWillReceiveProps(props) {
       this.setState({
           labels: ['protein', 'fats', 'carbs'],
           datasets: [{
               data: [props.protein,props.fats,props.carbs],
               backgroundColor: ['#f4a415', '#f2deb6', '#97d4da']
           }]
       })
   }
   render(){
       return(
           <div>
               <Pie className='pie'
                   data={{
                       labels: this.state.labels,
                       datasets: this.state.datasets
                   }}
               />
           </div>
       )
   };
}
 
export default PieChart
 
 
