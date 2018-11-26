import React, { Component } from 'react'; 
import './App.css';
import Minuteurs from '../component/Minuteurs';

class App extends Component {
  render() {
    return (
      <div >
        <h1>La cuisine tout un savoir</h1>
        <div id="minuteurs">
          <Minuteurs />  
        </div>
      </div>
    );
  }
}

export default App;
