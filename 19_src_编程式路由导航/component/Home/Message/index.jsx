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

    pushShow = (id, title) => {
        console.log('push被点击了');
        /* 通过params方式传递参数
        this.props.history.push(`/home/message/detail/${id}/${title}`) */

        // 通过search方式传递参数
        // this.props.history.push(`/home/message/detail?id=${id}$title=${title}`)

        // 通过state的方法传递参数
        this.props.history.push(`/home/message/detail`, {id, title})
    }

    replaceShow = (id, title) => {
        console.log('replace被点击了');
        /* 通过params方式传递参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`) */
        // this.props.history.replace(`/home/message/detail?id=${id}$title=${title}`)

        // 通过state的方法传递参数
        this.props.history.replace(`/home/message/detail`, {id, title})
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }
    
    go = () => {
        this.props.history.go(-1)
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
                                    
                                    {/* 通过params传递参数 */}
                                    {/* <Link to={`/home/message/detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link> */}

                                    {/* 通过search传递参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${mesObj.id}&title=${mesObj.title}`}>{mesObj.title}</Link> */}

                                    {/* 通过state的办法接收参数 */}
                                    <Link replace to={{pathname:'/home/message/detail/', state:{id:mesObj.id, title:mesObj.title}}}>{mesObj.title}</Link>

                                    <button onClick={() => this.pushShow(mesObj.id, mesObj.title)}>push方式跳转</button>
                                    <button onClick={() => this.replaceShow(mesObj.id, mesObj.title)}>replace方式跳转</button>
                                </li>
                            )
                        })
                    }
                <hr />
                {/* 注册路由,params传递参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}

                {/*search无需声明接收 */}
                {/* <Route path='/home/message/detail' component={Detail}/> */}

                {/* state无需声明接收 */}
                <Route path='/home/message/detail' component={Detail}/>

                <button onClick={this.back}>后退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>

                </ul>
            </div>
        )
    }
}
