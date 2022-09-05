import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  //全选的回调
  handelCheckAll = (event) =>{
    this.props.checkAllTodos(event.target.checked)
  }

  //handelClearAllDone全部清除的回调函数
  handelClearAllDone = () =>{
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    //已完成的个数
    const todoAll = todos.reduce((pre, todo) =>{return pre + (todo.done ? 1 : 0)}, 0)
    console.log('@', todoAll);
    //总数
    const total = todos.length
    return (
      <div>
            <div className="todo-footer">
                <label>
                <input type="checkbox" onChange={this.handelCheckAll} checked={total === todoAll && todoAll !==0 ? true : false}/>
                </label>
                <span>
                <span>已完成{todoAll}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handelClearAllDone}>清除已完成任务</button>
            </div>
      </div>
    )
  }
}
