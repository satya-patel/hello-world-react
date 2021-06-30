import React from 'react';
import './App.css';
import logo from './assets/BridgeLabz.jpg'

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      userName: ''
    }
  }

  //onClick Function
  onClick = (Sevent) => {
    console.log("save button is clicked", Sevent);
    window.open(this.url, "._blank");
  }
  onNameChange = (event) => {
    console.log("value is",event.target.value);
    //set the title using setstate method
    this.state({userName: event.target.value})
  }
  render() {
  return (
    <>
    <div>
      <h1>hello{this.state.userName}from Bridgelabz</h1>
      <img src={logo} onClick={this.onClick}
        alt="The BridgeLabz logo : a Bridge to Employment through lab works" />
      </div>

      <div>
        <input onChange={this.onNameChange} />
      </div>
    </>


    );
  }
}
export default App;