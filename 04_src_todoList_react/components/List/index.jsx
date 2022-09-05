import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  render() {
      const {todos, updateTodo, handleDelete} = this.props
        return (
            <ul className="todo-main">
                {
                    //遍历一下todos,把新增的todo加进去
                    todos.map( todo =>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} handleDelete={handleDelete}/>
                    })
                }
            </ul>
            )
        }
}
