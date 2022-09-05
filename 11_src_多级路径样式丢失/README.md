### 路由
1.1 SPA的理解
    1.单页面web应用(single page web application, SPA)
    2.整个应用只有一个完整页面
    3.点击页面的链接不会刷新页面,只会作业面的局部更新
    4.数据都需要通过ajax请求获取,并在前端异步展现

1.2 路由的基本使用
    1.明确好界面中的导航区,展示区
    2.导航区的a标签改为Link标签
        <Link to='xxxxx'>Deom</Link>
    3.展示区写Route标签进行路径的匹配
        <Route path='/xxxx' component={Deom}/>
    4.<App>最外侧包裹一个<BrowserRouter>或者<HashRouter>

1.3 路由组件和一般组件
    1.写法不同
        一般组件: <Deom/>
        路由组件: <Route path='/deom' component={Deom}>
    2.存放位置不同
        1.一般组件:components
        路由组件:pages
    3.接收到的props不同:
        一般组件:写组件标签时传递了什么,就能收到什么
        路由组件:接收到三个固定的属性
            history:
                go: f go(n)
                goback: f goBack()
                push: f push(path, state)
                replace: f replace(path, state)
            location:
                pathname:'/about'
                search:''
                state:undefined
            match:
                params:{}
                path:'/about'
                url:'/about'

    4.NavLink与封装NavLink
        1.NavLink可以实现路由链接的高亮,通过activeClassName指定样式名
        2.标签体内容是一个特殊的标签属性
        3.通过this.props.children可以获取标签体内容
        
    5.Switch的使用
        1.通常情况下.path和component是一一对应的关系
        2.Switch可以提高路由匹配效率(单一匹配)

    6.解决多级路径刷新页面样式丢失问题
        1.在public/index.html中引入样式时不写./ 写 / (常用)
        2.在public/index.html中引入样式时不写./ 在前面加上 %PUBLIC_URL%/
        3.把App里的BrowserRouter换成HashRouter