//创建外壳
import React,{Component} from "react";
import {nanoid} from 'nanoid';
import { ajax } from "./utils/request";
import { Button, Input, Table, message } from "antd";
import './App.css'

//存入数组，序列化
const saveTodo = function(todos) {
    localStorage.todos = JSON.stringify(todos)
}

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

export default class Todo extends Component {

    //初始化状态
    state = {
        inpValue:'',
        todos:[],
    }

    //保存本地
    componentDidUpdate() {
        saveTodo(this.state.todos)
        console.log('todo写入');
    }

    //每次操作完自动更新状态
    initTodo () {
        ajax('GET', 'http://localhost:3005/todo/all', null, (response) =>{
            console.log('response', response);
            this.setState({
                todos:response.data.map(item =>({
                    ...item,
                    content: item.task
                }))
            })
        })
    }
    
    //读取数据
    componentDidMount() {
        this.initTodo()
    }

    //input的事件监听，获取到输入的值
    handelTodo = (event) =>{
        this.setState({
            inpValue:event.target.value
        })
    }

    //添加一个todoList
    addTodo = () =>{
        ajax('POST', 'http://localhost:3005/todo/', {
            task: this.state.inpValue,
        }, () => {
            this.initTodo()
            message.info('添加成功！')
        })
        this.state.inpValue = ''
    }

    //删除一个todoList
    deleteTodo = (id) => {
        ajax('GET', `http://localhost:3005/todo/delete/${id}`, null, () =>{
            this.initTodo()
            message.warning('删除成功！')
        })
    }

    //更新一个done
    doneTodo = (opts) => {
        ajax('POST', `http://localhost:3005/todo/update/${opts.id}`, {
            task: opts.content,
            done: !opts.done,
        }, ()=>{
            this.initTodo()
            message.success('完成了！')
        })
    }
    
    render() {
          const columns = [
            {
              title: '内容',
              dataIndex: 'content',
              key: 'time',
              render(_, todo) {
                  if(todo.done === false) {
                      return todo.content
                  }
                  return <div style={{textDecoration: 'line-through', color: 'red'}}>{todo.content}</div>
                }
            },
            {
              title: '时间',
              dataIndex: 'time',
              key: 'time',
              render(_, { time }) {
                  return newTime(time)
              }
            },
            {
              title: '操作',
              render : (_, { id, done, content }) => {
                  console.log('id', id);
                 return(
                    <div>
                        <Button type="link" onClick={() => this.doneTodo({ id, done, content })}>完成</Button>
                        <Button type="link" danger onClick={() => this.deleteTodo(id)}>删除</Button>
                    </div>
                 )
              }
            },
          ];
        return(
            <div className="todo-cell">
                <div style={{ display: 'flex'}}>
                    <Input placeholder="Basic usage" style={{width: '300px'}} type="text" value={this.state.inpValue} onChange={this.handelTodo}/>
                    <Button style={{ marginLeft: '10px'}} type='primary' onClick={this.addTodo}>增加</Button>
                </div>
                    {
                        <Table dataSource={this.state.todos} columns={columns} />
                    }
            </div>
        )
    }
}