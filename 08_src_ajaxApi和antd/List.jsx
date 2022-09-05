import React, { Component } from 'react'
import './List.css'

//添加时间，必须传入一个参数，否则无法保存到本地
const newTime = (time) =>{
    const d = new Date(time)
    const yarn = d.getFullYear();
    const month = (d.getMonth() + 1) < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1);
    const data = d.getDate() < 10 ? ('0' + d.getDate()) : (d.getDate());
    const hours = d.getHours() < 10 ? ('0' + d.getHours()) : (d.getHours());
    const minute = d.getMinutes() < 10 ? ('0' + d.getMinutes()) : (d.getMinutes());
    const second = d.getSeconds() < 10 ? ('0' + d.getSeconds()) : (d.getSeconds());
    return yarn + '-' + month + '-' + data + ' ' + hours + ':' + minute + ':' + second
}

//创建一个List类组件
export default class List extends Component {

    /* constructor(props) {
        super(props)
    } */

    //开关一个todoDone的回调
    todoDone = () =>{
        this.props.doneTodo({
            id: this.props.id,
            done: this.props.done,
            content: this.props.content
        })
    }

    //删除一个todoList的回调
    todoDelete = () =>{
        this.props.deleteTodo(this.props.id)
    }

  render() {

    //判断done是否为真，如果为真就加上done,假就不变
    let todoClassName = 'list-content'
    if(this.props.done) {
        todoClassName = todoClassName + '' + 'done'
    }

    //把时间戳time传入到newTime,这样就能储存到本地
    const updateTime = newTime(this.props.time)

    return (
        <div>
            <button onClick={this.todoDone}>完成</button>
            <button onClick={this.todoDelete}>删除</button>
            <div className='todo-time'>{updateTime}</div>
            <div className={todoClassName}>{this.props.content}</div>
        </div>
    )
  }
}
