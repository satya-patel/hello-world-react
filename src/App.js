import React from 'react';
import './App.css';
import logo from './assets/BridgeLabz.jpg'

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      title: 'hello world from bridgelabz'
    }
  }

  //onClick Function
  onClick = (Sevent) => {
    console.log("save button is clicked", Sevent);
    window.open(this.url, "._blank");
  }
  render() {
  return (
    <div>
      <h1>{this.state.title}</h1>
      <img src={logo} onClick={this.onClick}
        alt="The BridgeLabz logo : a Bridge to Employment through lab works" />
      </div>
    );
  }
}
export default App;