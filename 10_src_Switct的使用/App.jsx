import React, { Component } from 'react'
import { Router, NavLink, Route, Switch } from 'react-router-dom'
import MyNavLink from './NavLink'
import About from './component/About'
import Home from './component/Home'
import Test from './component/Test'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 远程html文档,靠a标签跳转到不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在react中靠路由来实现切换组件 */}
                            {/* NavLink有个特有的属性activeClassName='属性名' */}
                            {/* <NavLink className='list-group-item' to='./about'>About</NavLink>
                            <NavLink className='list-group-item' to='./home'>Home</NavLink> */}

                            {/* 实现NavLink的封装 */}
                            <MyNavLink to='/about'>About</MyNavLink>
                            <MyNavLink to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/Home' component={Home}/>
                                    <Route path='/Home' component={Test}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
