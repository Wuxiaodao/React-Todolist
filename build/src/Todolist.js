import React from 'react'
import TodoInput from './TodoInput'
import TodoIng from './Todoing'
import './index.css';
class TodoList extends React.Component {
    constructor() {
        super();
        this.state = { 
            list:[]
        };
    }
    //回车事件
    Enter=(e)=>{
        var li = {"value":e,"isck":true}; 
        this.setState({
            list:[...this.state.list,li]
        })
        }
    //删除事件
    Delete = (index)=>{
        var newData = this.state.list;
        newData.splice(index,1);
        this.setState({
            list:newData
        })
    }
    //监听事件
    Change=(index)=>{
        var newData = this.state.list;
        newData[index].isck = !newData[index].isck;
        this.setState({
            list:newData
        })
    }
    render(){
        var now = 0;
        var result = 0;
        for(var i =0;i < this.state.list.length;i++){
            if([...this.state.list][i].isck === false){
                result += 1;
            }else{
                now += 1;
            }
            }
        return(
            <div>
                <TodoInput onKeyPress={this.Enter}/>
                <TodoIng list={this.state.list}
                Change={this.Change} 
                Delete={this.Delete}
                now={now}
                result={result}/>
            </div>
        )
    }
}

export default TodoList;
