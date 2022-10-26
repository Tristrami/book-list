import { Link, NavLink, Route, Routes, useLocation, useRoutes } from "react-router-dom";
import Book from "./Book";
import BookRoutes from "./BookRoutes";

import Home from "./Home";
import NotFound from "./NotFound";

function App() {

  // 除了使用 JSX 定义 Routes 以外，还可以使用 useRoutes() hook，两者都可以将
  // 路由、dom 结构、数据结合在一起
  // const element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/books",
  //     element: <BookList />,
  //     children: [
  //       {
  //         path: ":id",
  //         element: <Book />
  //       },
  //       {
  //         path: "new",
  //         element: <NewBook />
  //       }
  //     ]
  //   }
  // ]);

  // 返回一个代表当前 url 的 location 对象，其中封装了许多与当前 url 相关的属性，包括 state 属性
  const location = useLocation();

  return (
    <>
      {/* 一个组件里可以有多个 <Routes />，其中的内容会根据 url 被动态渲染到相应的位置，
          这个 <Routes />  中可以定义如 NavBar 之类的需要子路由的组件共享的内容 */}
      <Routes>     
        <Route path="/books/*" element={<h1>Books Nav Bar</h1>} />  
      </Routes>
      <h3>{`State value of current location object: ${location.state}`}</h3>
      <nav>
        <ul>
          {/* 这里的 to 属性所指的 url 都是相对主机名的相对 url */}
          {/* replace 属性指的是，如果 <Link /> 中的内容被点击，那么在浏览器 history 中移除
              当前页面，例如按这个顺序点击页面 book1 => book2 => Home，如果 replace 为 true，
              当我们在 Home 页面下点击返回时，会返回到 book1，而不是 book2，因为 book2 在浏览器
              history 中被 Home 替换了；这个属性可以用在登录页面，当用户登录成功后，点击返回时，我
              们不希望用户返回到登录页面 */}
          <li><Link to="/" replace >Home with replace</Link></li>
          {/* <NavLink /> 是 <Link /> 的 一个 wrapper，它包装了 isActive 属性，可以监测当前的 
              <NavLink /> 是否处于 active 状态，当我们处于 to 属性中的 url 下时，其为 active 
              状态，我们可以在 <NavLink /> 中使用 callback 函数接收 isActive 参数，根据 isActive 
              的值来做相应的操作 */}
          {/* 假如当前有 <NavLink to="/" /> ，如果我们当前 url 为 /books，那么这个 <NavLink /> 
              也会是 active 状态，我们可以为其加上 end 属性，这样只有当我们处于 / 这个 url 下时它才
              会是 active 状态，而当我们处于 / 下面的任意 url 时，即 /**，这个 <NavLink /> 不会为
              active 状态 */}
          {/* 如果我们未指定 <NavLink /> 的 className，默认情况下，当其为 active 状态时，className
              为 active，不是 active 状态时，className 为空串 */}
          {/* 我们可以在 <NavLink /> 中使用 state 属性在不同的组件间传递一些数据，我们可以在 location
              对象中访问 state 的值 */}
          <li> 
            <NavLink 
              to="/" 
              end
              style={({ isActive }) => isActive ? { color: "red" } : {}}
              state="Hi"
            >
              {({ isActive }) => isActive ? "Active NavLink Home" : "NavLink Home"}
            </NavLink>
          </li>
          <li><Link to="/books">Books</Link></li>
          {/* reloadDocument 属性为 true 时 react 会在链接被点击时刷新页面 */}
          <li><Link to="/" reloadDocument >Back to home page and reload</Link></li>
        </ul>
      </nav>
      {/* <Routes /> 中的内容都会根据 url 动态渲染，而其他内容是固定的 */}
      <Routes>
        {/* url 指定的越具体，Route 的匹配优先级越高 */}
        <Route path="/" element={<Home />} />
        {/* 将 /books/* 对应的路由逻辑单独抽离出来放在 <BookRoutes /> 中，要在这里使用
            时直接让 element={<BookRoutes />} 即可 */}
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </> 
  );
}

export default App;
