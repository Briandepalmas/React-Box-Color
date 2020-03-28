import React, { Component } from 'react'
import './App.css'
export class App extends Component {
  
  constructor(props){
        super(props);
    
        this.state={
          color:'blue',
          clickCounter:0
        }
      }
  
  
  render() {
    return (
      <div>
        <h1>Box color change</h1>
        <div className="colorBox" style={{backgroundColor=this.state.color}}>
          <p>Click Me</p>         
        </div>
      </div>
    )
  }
}

export default App

// import React from 'react';
// import './App.css';

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props);

//     this.state={
//       color:'blue',
//       clickCounter:0
//     }
//   }

//   onChange =(e)=>{
//     this.setState({color:'orange',
//   clickCounter: this.state.clickCounter++
// })

//   }
  
//   render() {
//     return (
//       <div className="App">
//         <h1>Box color change</h1>
//         <div className="colorBox" style={{backgroundColor=this.state.color}}>
//           <p>Click Me</p>
//         </div>
//       </div>
//     )
//   }
// }