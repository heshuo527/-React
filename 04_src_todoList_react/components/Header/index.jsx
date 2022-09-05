import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  
  //添加input的回调函数
  pushTodo = (event) =>{

    const {keyCode,target} = event

    //添加判断，假如输入的不是enter那就输出它的值
    if(keyCode !== 13) return 
    console.log(nanoid())

    //添加的todo名字不能为空
    if(target.value.trim() === '') {
      alert('输入不能为空')
      return
    }

    //准备好一个todo对象
    const todosObj = {id:nanoid(),name:target.value,done:false}
    
    //将todoObj传递给App
    this.props.addTodo(todosObj)
    target.value = ''
  } 

  render() {
    return (
      <div>
        <div className="todo-header">
            <input type="text" onKeyUp={this.pushTodo} placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      </div>
    )
  }
}
