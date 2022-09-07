import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

    goBack = () => {
        this.props.history.goBack()
    }

    goForward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(-2)
    }

    render() {
        console.log('Header接收到的props', this.props);
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                        <button onClick={this.goBack}>后退</button>
                        <button onClick={this.goForward}>前进</button>
                        <button onClick={this.go}>go</button>
                    </div>
                </div>
            </div>
        )
    }
}

//whitRoute可以加工一般组件,让一般组件具备路由组件的所有的api
//whitRoute返回的是一个新组件
export default withRouter(Header)
