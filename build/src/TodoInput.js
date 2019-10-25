import React, { Component } from 'react'

export default class TodoInput extends Component {
    Enter=(e)=>{
        if(e.which === 13){
            let ele = e.target;
            this.props.onKeyPress(e.target.value);
            ele.value = ""
        }
    }
    render(){
        return (
             <div className="title"><h2>ToDoList</h2>
                     <input placeholder="添加ToDo" onKeyDown={this.Enter}/>
             </div>
        )
}
}