import React, { Component } from 'react'

export default class TodoIng extends Component {
    render() {
        return (
            <ul className="h3-1">     
            <h3>正在进行
            <div className="h3-2">
            {this.props.now}</div>
            </h3>
            <ul>
            {
                this.props.list.map((v,code)=>{
                    if(v.isck===true){
                        return (
                            <div className="li-1" key={code}>
                                <input type="checkbox" onClick={()=>this.props.Change(code)}/>
                                <p>{v.value}</p>
                                <button onClick={()=>this.props.Delete(code)}></button>
                            </div>
                        )
                    }
                    return ""
                })
            }
            </ul>
            <h3>已经完成
            <div className="h3-2">
            {this.props.result}</div>
            </h3>
            {
                this.props.list.map((v,code)=>{
                    if(v.isck===false){
                        return (
                            <div className="li-2" key={code}>
                                <input type="checkbox" onClick={()=>this.props.Change(code)}/>
                                <p>{v.value}</p>
                                <button onClick={()=>this.props.Delete(code)}></button>
                                
                            </div>
                        )
                    }
                    return ""
                }) 
            }
        </ul>
        )}
}
