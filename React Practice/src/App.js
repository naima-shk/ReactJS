import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Routers from './Route';
import Provider from 'react-redux';
import store from './store';
class App extends Component{
  
render(){
    return(
      <Provider store={store}>
        <Routers/>
        </Provider>
      //<div className='App'>
      //<header className='app-header'>
      //<img src={logo} className="app-logo" alt="logo"/>
      //<h1 className="app-title"> welcome to the React></h1>
      //</header>
      //<p className="app-intro">
         // to get started ,edit<code>src/app.js</code> and save to reload 
         // </p>
          //</div>

    
    );
  }
}
export default App;