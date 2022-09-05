import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentsData = () =>{
        axios.get('http://localhost:3000/api1/students').then(
            response =>{console.log('请求成功了', response.data)},
            error =>{console.log('请求失败', error);}
        )
    }
    
    getCatData = () =>{
        axios.get('http://localhost:3000/api1/cars').then(
            response =>{console.log('请求成功了', response.data)},
            error =>{console.log('请求失败', error);}
        )
    }
  render() {
    return (
      <div>
          <button onClick={this.getStudentsData}>点我获取学生数据</button>
          <button onClick={this.getCatData}>点我获取汽车数据</button>
      </div>
    )
  }
}
