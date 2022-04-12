import React from 'react';
import Profile from './components/Profile.js';
import './App.css'

class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
      show : true,
      count:0,
     
      btnText : "show profile",
     
      color : "primary",      
    };
  }
  

  
 
  btnClick(){
    this.setState({show: !this.state.show})
    if(this.state.btnText === "show profile"){
      this.setState({
        btnText : "hide profile",
        color: "danger"})
    }
    if(this.state.btnText === "hide profile"){
      this.setState({
        btnText : "show profile",
        color:"success"})
    }
  }
  componentDidMount(){
    setInterval(() => this.setState({count: this.state.count+1}),1000);
  }
  
  render() {
    return (
      <div className='App'>       
        {!this.state.show && <Profile />}
        <h2> {this.state.count}</h2>
        <button className=''
              onClick={() => this.btnClick()}
              variant={this.state.color}>
          {this.state.btnText}
        </button>
      </div>
    )
  }
}

export default App;