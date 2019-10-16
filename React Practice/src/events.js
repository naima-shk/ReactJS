import React, { Component } from 'react';
import Counter from './Counter';
class events extends Component{
    constructor(props){
    super(props);
    this.state={
        counter:0
    }
    this.incrementCounter=this.incrementCounter.bind(this);
    this.decrementCounter=this.decrementCounter.bind(this);
}
    //clickHandler(){
        //console.log('click pressed');}
        //incrementCounter(param,ev){
            //console.log(ev,'ev');
            //console.log(param,'param');
            //this.setState({counter:this.state.counter +1
            //})

        }
        incrementCounter()
        {
            console.log('increment');

        }
        decrementCounter() 
         {
            console.log('decrement');
        }

    render()
    {
        return(
            <div>
                <Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter}/>
            {/*<h1>hello events</h1>*/}
            {/*<button onClick={function(){console.log('first button');}}>click me!</button>
            <button onClick={this.clickHandler}>second button</button>*/}
            {/*<button onClick={this.incrementCounter.bind(this,'hello')}>+</button>*/}
            {/*<span>{this.state.counter}</span>*/}
            {/*<button onClick={this.incrementCounter.bind(this,'event')}>+</button>*/}
            </div>
        )
    }

export default events;