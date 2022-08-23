//引入核心库
import React from "react"
//引入ReactDOM
import {createRoot} from 'react-dom/client'
//引入app组件
import App from "./App"

//渲染组件
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <div>
        <App />
    </div>
)