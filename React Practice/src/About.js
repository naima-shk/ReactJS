import React, { Component } from 'react';
import {
  Link
}  from 'react-router-dom';

class About extends Component{
  operation(){
    console.log('operation');
    this.props.history.push('/');
  }
  routetocontact(){
    this.props.history.push('/contact/2345');
  }
  
render(){
    return(
      <div className='App'>
      <h1>Hello About us </h1>
      <button onClick={this.operation.bind(this)}>operation</button>
      <button onClick={this.routetocontact.bind(this)}>contact</button>
      <ul>
        <li><Link to='/contact/2345'>2345</Link></li>
        <li><Link to='/contact/2346'>2346</Link></li>
        <li><Link to='/contact/2347'>2347</Link></li>

        </ul>
          </div>

    
    );
  }
}
export default About;