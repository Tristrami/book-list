import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

// 其他不常用的 Router
// HashRouter
// HistoryRouter
// MemoryRouter: 所有的 path => element 信息存在内存中，这种路由不会改变浏览器的 url，在测试的时候可能有用
// StaticRouter
// NativeRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);