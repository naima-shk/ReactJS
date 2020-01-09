import React,{Component} from 'react';
import Button from './component/Button';
class Application extends Component{
  constructor(props){
    super(props);

     this.state={
      current:'',
      previous:[]
    }
  }

render(){
  const buttons=[
    {symbol:'C',cols:3 ,action:this.secret}
    {symbol:'/',cols:1 ,action:this.addtoCurrent},
    {symbol:'7',cols:1 ,action:this.addtoCurrent},
    {symbol:'8',cols:1 ,action:this.addtoCurrent},
    {symbol:'9',cols:1 ,action:this.addtoCurrent},
    {symbol:'X',cols:1 ,action:this.addtoCurrent},
    {symbol:'4',cols:1 ,action:this.addtoCurrent},
    {symbol:'5',cols:1 ,action:this.addtoCurrent},
    {symbol:'6',cols:1 ,action:this.addtoCurrent},
    {symbol:'-',cols:1 ,action:this.addtoCurrent},
    {symbol:'1',cols:1 ,action:this.addtoCurrent},
    {symbol:'2',cols:1 ,action:this.addtoCurrent},
    {symbol:'3',cols:1 ,action:this.addtoCurrent},
    {symbol:'+',cols:1 ,action:this.addtoCurrent},
    {symbol:'0',cols:2 ,action:this.addtoCurrent},
    {symbol:'.',cols:1 ,action:this.addtoCurrent},
    {symbol:'=',cols:1 ,action:this.addtoCurrent},
   ];
  addtoCurrent=(symbol)=>{
   this.setState({current:this.state.current + symbol});
  }
  return(
  <div className='App'>
 <input className="Result" type="text" value={this.state.current}/>
  {buttons.map((btn,i) =>{
   return <Button/>
  }
  )}
  </div>
  );
}
}
export default Application;
