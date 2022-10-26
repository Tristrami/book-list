import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import BookLayout from "./BookLayout";

const BookRoutes = () => {
  return (
    <>
    {/* 嵌套路由可以为不同路由组件定义一个可共享的组件，并且他们的 url 可以不相同，
        如果 url 不同，把父路由中的 path 属性去掉即可*/}
    {/* /books/* 的公共组件放在这里 */}
      <BookLayout />
      <Routes>
        {/* index 属性代表这个 Route 直接匹配父路由的 path */}
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Routes>
    </>    
  )
}

export default BookRoutes;