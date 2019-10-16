import React, { Component } from 'react';
//import DigitalClock from './digitalclock';
//import Analogclock from './Analogclock';
import Logger from './Logger';
class Clock  extends Component{
    constructor(props){
    super(props);
    this.state={
         CurrentTime: new Date().toLocaleString()
    }
    this.updateTime();
    }
    updateTime(){
        setInterval(()=>{
            this.setState({
                CurrentTime: new Date().toLocaleString(),
                Counter:this.state.Counter+1
            })
        } ,1000)
    }

    render(){
        return (
            //<h1>{this.state.CurrentTime}</h1>
            <div>
            {/*<DigitalClock time={this.state.CurrentTime}/>
            <Analogclock time={this.state.CurrentTime}/>*/}
            {
            (this.state.Counter<3  )?
            (<Logger time={this.state.CurrentTime}/>):
            (<div></div>)
            }
            </div>
        )
    }
}
export default Clock;