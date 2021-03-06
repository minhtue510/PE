
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';



class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }  

}

export default App;