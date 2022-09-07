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

    7.路由严格匹配和模糊匹配
        1.默认使用的是模糊匹配(简单记:[输入得路径]必须包含要[匹配的路径], 且顺序要一致)
        2.开启严格模式匹配:<Route exact={true} path='/about'>在标签里加上个exact
        3.严格模式不要随便开启,需要在开,有时候开启会导致无法匹配二级路由
    
    8.Redirect的使用
        1.一般写在路由的最下方,当所有路由无法匹配时,跳转到Redirect指定的路由
        <Switch>
            <Route exact={true} path='/about/a/b' component={About}/>
            <Route exact={true} path='/Home' component={Home}/>
            <Redirect to='/about'>
        </Switch>

    9.嵌套路由
        1.注册子路由时要写上父路由的path值
        2.路由的匹配是按照路由注册路由的顺序进行的

    10.向路由组件传递参数
        1.params参数传递
            路由链接 (携带参数):<Link to="/home/message/age/18"></Link>
            注册路由(声明接收):<Route path='/home/message/:age/:18' component={Test}>
            参数接收:const {id, name} = this.props.match.params
        2.search传递参数
            路由链接(携带参数):<Link to='/home/message/?key=value&key=value'></Link>
            注册路由(无需声明接收):<Route path='/home/message/detail' component={Detail}>
            参数接收:const {search} = this.props.location
            备注:获取到的search是urlencoded编码字符串,需要借助到querystring解析
        3.state传递参数
            路由链接:(携带参数):<Link to={{pathname:'/home/message/detail', state:{id:obj.id, title:obj.title}}}></Link>
            注册路由(无需声明接收):<Route path='/home/message/detail' component={Detail}>
            参数接收:const {id, title} = this.props.location.state
            备注:刷新页面也可以保留住参数
    11.编程式路由导航
        借助this.props.history对象上的api对操作路由跳转,前进,后退
            this.props.push()
            this.props.replace()
            this.props.history.goBack()
            this.props.history.goForward()
            this.props.history.go()