//创建'外壳'组件
import React,{Component} from "react"
import Header from './Components/Header' 
import List from "./Components/List"
import Footer from "./Components/Footer"
import './App.css'

//暴露App组件
export default class App extends Component{
    state = {todos:[
        {id:'001', name:'吃饭', done:true},
        {id:'002', name:'睡觉', done:true},
        {id:'003', name:'敲代码', done:false},
        {id:'004', name:'逛街', done:true},
    ]}
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Header/>
                <List todos={this.state.todos}/>
                <Footer/>
                </div>
            </div>
        )
    }
}

