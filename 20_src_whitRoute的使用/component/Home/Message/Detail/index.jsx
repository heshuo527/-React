import React, { Component } from 'react'
// // import qs from 'querystring'
// const qs = require('querystring');
const DetailData = [
  { id: '01', content: '你好!js' },
  { id: '02', content: '你好!React' },
  { id: '03', content: '你好!Vue' }
]

export default class Detail extends Component {

  render() {
    
    console.log(this.props);

    // 接收params参数
    // const { id, title } = this.props.match.params

    // // 接收search参数
    // const {search} = this.props.location
    // const {id, title} = qs.parse(search)

    // 接收state参数
    const {id, title} = this.props.location.state || {}

    /* 查找 */
    const findResult = DetailData.find((dataObj) => {
      console.log(DetailData);
      return dataObj.id === id
    }) || {}

    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    )
  }
}
