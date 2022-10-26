import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

const BookLayout = () => {

  // useSearchParams() hook 可以获取和设置浏览器 url 中的 searchParams，即 ?a=b&c=d 形式的参数
  const [searchParams, setSearchParams] = useSearchParams({ bookNumber: 1 });
  const bookNumber = searchParams.get("bookNumber");

  return (
    <>
      <input 
        type="number" 
        value={bookNumber} 
        onChange={(e) => setSearchParams({ bookNumber: e.target.value })} 
      />
      <Link to={`/books/${bookNumber}`}>Book {bookNumber}</Link>
      <ul>
        <li><Link to="/books/1">Book 1</Link></li>
        <li><Link to="/books/2">Book 2</Link></li>
        <li><Link to="/books/new">New Book</Link></li>
      </ul>
      {/* < Router path="/books" /> 定义当 url 为 /books 时 BookLayout 就会被渲染，在 BookLayout 
          中加上 <Outlet /> 后其子路由中的组件在匹配相应 url 时也会被渲染，两个组件的内容会同时存在，也就是
          在 /books 这个 url 下 BookLayout 中的内容是固定会被渲染的，而子路由中组件是根据 url 动态渲染的，
          否则子路由中的组件即使可以匹配到 url 也无法被渲染；BookLayout 中可以定义一些可供子路由中的组件共享
          的内容 */}
      {/* context 属性可以定义一些共享的数据；这个东西非常有用，因为 BookLayout 本身是一个共享组件，它当然也
          会有一些共享的数据和逻辑，在子路由的组件中我们可以使用 useOutletContext() hook 来获取 context */}
      <Outlet context={{ description: "This is an awesome book!" }} />
    </>
  )
}

export default BookLayout;