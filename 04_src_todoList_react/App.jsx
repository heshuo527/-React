//创建外壳
import React from "react"
//引入组件文件
import Header from "./components/Header"
import Footer from "./components/Footer"
import List from "./components/List"
import '../src/App.css'


export default class App extends React.Component{

    //初始化状态
    state = {todos:[
        {id:'001', name:'吃饭', done:true},
        {id:'002', name:'睡觉', done:false},
        {id:'003', name:'敲代码', done:true},
        {id:'004', name:'打游戏', done:true},

    ]}

    //给addTodo属性添加方法
    addTodo = (todosObj) =>{
        //获取原来的todos
        const {todos} = this.state
        //追加一个todo
        const newTodos = [todosObj, ...todos]
        //更新状态
        this.setState({todos:newTodos})
    }

    //updateTodo用于更新一个对象
    updateTodo = (id, done) =>{
        //获取状态中的todos
        const {todos} = this.state
        //匹配处理数据  
        const newTodos = todos.map((todosObj) =>{
            //
            if(todosObj.id == id) return {...todosObj, done}
            else return todosObj
        })
        this.setState({todos:newTodos})
    }

    //deleteTodo用于删除一个todo对象
    handleDelete = (id) =>{
        console.log('按钮被点击了', id);
        //获得原来的todos
        const {todos} = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter((todoObj) =>{
        return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }

    //checkAllTodos用来全选
    checkAllTodos = (done) =>{
        //获得原来的todos
        const {todos} = this.state
        //加工数据
        const newTodo =  todos.map((todoObj) =>{
            return {...todoObj, done}
        })
        //更新状态
        this.setState({todos:newTodo})
    }

    //清楚已完成
    clearAllDone = () =>{
        //获取原来的状态
        const {todos} = this.state
        //过滤数据
        const newTodos = todos.filter((todoObj) =>{
            return !todoObj.done
        })
        //更新状态
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <div><Header addTodo={this.addTodo}/></div>
                    <div><List todos={todos} updateTodo={this.updateTodo} handleDelete={this.handleDelete}/></div>
                    <div><Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone}/></div>
                </div>
            </div>
        )
    }
}
