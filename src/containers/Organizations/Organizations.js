import React , {Component } from 'react';
import Axios from 'axios';
class Organizations extends Component {
 state = {
   organisations: []
 }
 
 componentDidMount() {
    this.getValues();
 }

 getValues = () => {
  Axios.get("/items")
  .then( (res)=> {
    console.log(res)
    
    this.setState({ organisations: res.data} )
    console.log(this.state.organisations)
  }).catch((err)=>{
    console.log(err)
  })
 }

 render() {
   return(
     <div>
       <ul>
         <li>o1</li>
         <li>o2</li>
         <li>o3</li>
       </ul>
       {this.state.organisations.map((item) => {
         return <div> {item.name}</div>
       })}
     </div>
   )
 }
}

export default Organizations;