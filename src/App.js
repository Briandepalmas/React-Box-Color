import React, { Component } from 'react'
import './App.css'
export class App extends Component {
  
  constructor(props){
        super(props);
    
        this.state={
                  color:'blue',
                  clickCounter:0,
                  toggleOn:false

             }
        this.handleChangeColor=this.handleChangeColor.bind(this)
        
      }
  
  
    handleChangeColor(){
      this.setState(toggleSwitch => ({toggleOn: !toggleSwitch.toggleOn}));
      this.setState({clickCounter: this.state.clickCounter+1})
      
      if (this.state.toggleOn==false){
        this.setState({color:'red'})
      }
      else{
        this.setState({color:'green'})
      }
         
 }
  
  render() {
    return (
      <div>
        <h1 id="title1">Box color change</h1>
        <h1 id="title2">ClickCounter: {this.state.clickCounter}</h1>
        <div onClick={this.handleChangeColor} className="colorbox" style={{backgroundColor:this.state.color}}>
          <p className="p">Click Me</p>         
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