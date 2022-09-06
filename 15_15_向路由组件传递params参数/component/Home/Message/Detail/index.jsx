import React, { Component } from 'react'

const DetailData = [
  { id: '01', content: '你好!js' },
  { id: '02', content: '你好!React' },
  { id: '03', content: '你好!Vue' }
]

export default class Detail extends Component {

  state = {}

  render() {
    
    console.log(this.props);

    const { id, title } = this.props.match.params
    const findResult = DetailData.find((dataObj) => {
      console.log(DetailData);
      return dataObj.id === id
    })

    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    )
  }
}
