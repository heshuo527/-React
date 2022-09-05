import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  //初始化状态
  state = {mouse:false}

  //鼠标移入，移出的回调
  handleMouse = (flag) =>{
    return () =>{
      this.setState({mouse:flag})
    }
  }

  //勾选、取消勾选某个todo的回调
  handChange = (id) =>{
    return (event) =>{
      this.props.updateTodo(id, event.target.checked)
    }
  }

  //删除一个todo的回调
  handleDelete = (id) =>{
    this.props.handleDelete(id)
    }

  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:this.state.mouse ? 'gray' : 'white' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handChange(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}} onClick={()=> this.handleDelete(id) }>删除</button>
      </li>
    )
  }
}