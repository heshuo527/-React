//创建外壳
import React,{Component} from "react"
// import React from "react"
import ReactDOM from "react-dom"

//创建一个组件
export default class App extends Component{

    death = () =>{
        //卸载组件
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    render() {
       return(
            <div>
                <div><h1>React学不会怎么办?</h1></div>
                <button onClick={this.death}>不活了</button>
            </div>
       )
    }
}

