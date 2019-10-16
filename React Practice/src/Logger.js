import React, { Component } from 'react';
class Logger extends Component{
    constructor(props){
        super(props);
        console.log('constructor running');
    }
     componentWillMount(){
         console.log('component will mount method');
     }
     componentWillReceiveProps(nextProps){
         console.log('next props:', nextProps);
     }
     shouldComponentUpdate(newProps, newState){
         console.log('should component update');
         console.log('New Props:',newProps);
         console.log('New State:', newState); 
         return true;
     }
    render(){
        console.log('render method');
        return(
            <h1>{this.props.time}</h1>
        )

    }
}
export default Logger;