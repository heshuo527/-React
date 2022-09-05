import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    //获取当前用户输入的值, 连续解构赋值加上重命名
    const  {keyWordElement:{value:keyWord}} = this
    console.log(keyWord);
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {console.log('请求成功', response.data);},
      error => {console.log('请求失败', error);}
    )

  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder='enter the name you search'/>&nbsp;
            <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
