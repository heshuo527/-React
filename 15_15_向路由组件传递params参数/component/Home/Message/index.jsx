import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

    state = {
        messageArr: [
            { id: '01', title: '消息一' },
            { id: '02', title: '消息二' },
            { id: '03', title: '消息三' },
        ]
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((mesObj) => {
                            return (
                                <li key={mesObj.id}>
                                    <Link to={`/home/message/detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link>
                                </li>
                            )
                        })
                    }
                <hr />
                {/* 注册路由,传递参数 */}
                <Route path='/home/message/detail/:id/:title' component={Detail}/>
                </ul>
            </div>
        )
    }
}
