import React from 'react';
function Analogclock(props){
    console.log(props.time);
    let time =new Date(props.time);
    let clockcontainer={
        position:'relative',
        top:0,
        left:0,
        width:200,
        height:200,
        borderRadius:20000,
        borderStyle:'solid',
        borderColor:'black'

    }
    let secondhand={
        position:'relative',
        top:100,
        left:100,
        border:'1px solid red',
        width:'40%',
        height:1,
        transform:'rotate('+((time.getSeconds()/60)*360 -90).toString() + 'deg)',
        transformOrigin:' 0% 0%',
        backgroundColor:'red'
    }
     let minutehand={
        position:'relative',
        top:100,
        left:100,
        border:'1px solid grey',
        width:'40%',
        height:3,
        transform:'rotate('+((time.getMinutes()/60)*360 -90).toString() + 'deg)',
        transformOrigin:' 0% 0%',
        backgroundColor:'grey'

    }

    let hourhand={

        position:'relative',
        top:92,
        left:106,
        border:'1px solid grey',
        width:'20%',
        height:7,
        transform:'rotate('+((time.getHours()/60)*360 -90).toString() + 'deg)',
        transformOrigin:' 0% 0%',
        backgroundColor:'grey'
    }
    return(
        <div style={clockcontainer}>
            <div style={secondhand}></div>
            <div style={minutehand}></div>
            <div style={hourhand}></div>
        </div>
    )
}
export default Analogclock;