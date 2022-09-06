//引入react核心库
import React from "react";
//引入ReactDOM
import {createRoot} from 'react-dom/client'
//引入route路由
import { BrowserRouter } from 'react-router-dom'
//引入App组件
import App from './App'

//获取组件
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
//渲染到页面
root.render(
  <div>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </div>
)