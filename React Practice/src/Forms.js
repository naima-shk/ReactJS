import React, { Component } from 'react';
class Forms extends Component{
    constructor(props){
        super(props); 
            this.state={
                username:'',
                allusers:[] ,
                checkboxgroup:{
                    mongodb:false,
                    express:false,
                    react:true,
                    node:false
                }
            }
            
            this.formhandler=this.formhandler.bind(this);
            this.clickhandler=this.clickhandler.bind(this);
            this.checkboxhandler=this.checkboxhandler.bind(this);
          }
     formhandler(event)
       {  
           //console.log(event.target.value,'event',event);
            this.setState({ 
          username:event.target.value
            })
        }
        clickhandler(event){
            let Currentuser= this.state.allusers;
            Currentuser.push(this.setState.username);
            this.setState({
                allusers:Currentuser
            }) 
        }
        checkboxhandler(event){
         let checkbox=this.state.checkboxgroup;
         checkbox[event.target.value]=event.target.checked;
         this.setState({
             checkboxgroup:checkbox
         })

        }
    render() 
        {
    return(
       <div>
          {/* <h1>hello forms</h1>
           <input type='text' name='tech' value={this.state.username} onChange={this.formhandler}/>
            <p>{this.state.username}</p>
          <button onClick={this.clickhandler}>save user</button>*/}
            developers :
            <br/>
            <label>
            mongodb<input type='checkbox' name='tech' value='mongodb' checked={this.state.checkboxgroup['mongodb']} onChange={this.checkboxhandler}/>
            </label>
             <br/>
            <label>
           express<input type='checkbox' name='tech' value='express' checked={this.state.checkboxgroup['express']} onChange={this.checkboxhandler}/>
            </label>
            <br/>
            <label>
           React<input type='checkbox' name='tech' value='react' checked={this.state.checkboxgroup['react']} onChange={this.checkboxhandler}/>
            </label>
            <br/>
            <label>
           node<input type='checkbox' name='tech' value='node' checked={this.state.checkboxgroup['node']} onChange={this.checkboxhandler}/>
            </label>
            <br/>

       </div>
        )
} }
export default Forms;