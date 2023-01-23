import React from 'react';

const ToDolist=(props)=>{
 
    return(
       <div className='todo_style'>
        <i className="fa fa-times" area-hidden="true" onClick={()=>{
           props.onSelect(props.id);
        }} ></i>
        <li >{props.text}</li>
        </div>
    )

}
export default ToDolist;

/*import React from "react";
// import './App';
function Todolist (props){
    return (<>
    <div>
    <h5 onClick={()=>{
        props.onSelect(props.id);
    }}>x</h5>
    <li> {props.text} </li>
    </div>
    </>);
}
export default Todolist;*/