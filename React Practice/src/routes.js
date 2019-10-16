import React from 'react';
import {
     Router,
      Route
    } 
from "react-router-dom";
import App from './App';
import About  from './About';
import  Navbar from './Navbar';
import  contact  from './contact';
import {createBrowserHistory} from 'history';

const CustomeHistory= createBrowserHistory();

 
const CustomeRoutes = () =>  (

<Router history={CustomeHistory} >
    <div>
        <Navbar/>
        <hr/>
        <Route exact path='/' component={App}/>
        <Route path='/About' component={About}/>
        <Route path='/contact/:id' component={contact}/>
    </div>
</Router>
);
export default CustomeRoutes;