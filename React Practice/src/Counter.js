import React, { Component } from 'react';
class counter extends Component{

    render(){
        console.log(this.props);
        return(
            <div>
                <h1>mycounterapp</h1>
                <button>+</button>
                <span>{this.props.counter}</span>
                <button>-</button>
            </div>

        )
    }
}
export default Counter;