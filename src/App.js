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
             //binds the function so it can be clicked on button
        this.handleChangeColor=this.handleChangeColor.bind(this)
        
      }
  
  //function that changes all propertire color clickcounter and toggle.
    handleChangeColor(){
      // the ! toggles the 'toggleOn' property between true or false everytime handleChangecolor os called onClick
      this.setState(toggleSwitch => ({toggleOn: !toggleSwitch.toggleOn}));
     //Adds one to property clickcounter everytime handlechangecolor is clicked
      this.setState({clickCounter: this.state.clickCounter+1})
      
      //when toggle is not on or false the propety color is red and when true is green.
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

