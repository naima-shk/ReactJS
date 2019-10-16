import React, { Component } from 'react';

class contact extends Component{
  
  
render(){
    let users={
        2345: {
            name:'naima',
        cell:'abc'
    },
     2346:{
     name:'aisha',
     cell:'xyz'},
      2347:{
          name:'twinkle',
          cell:'abc'
      },
    }
    let requiredusers =users [this.props.match.params.id]


    return(
      <div className='App'>
      <h1>Hello contact </h1>
           user name:{requiredusers.name}
           <br/>
           user cell:{requiredusers.cell}

          </div>

    
    );
  }
}
export default contact;