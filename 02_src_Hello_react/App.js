//创建'外壳'组件
import React,{Component} from "react"
import Hello from './Components/Hello'
import Welcome from "./Components/Welcome"

//暴露App组件
export default class App extends Component{
    render() {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

