import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  // useParams() hook 可以获得路由到该组件时 url 中的参数
  const { id } = useParams();
  // 获取 <Outlet /> 定义的 context 中的内容，但将 /books/* 中的逻辑单独抽离后，
  // 就不存在 <Outlet /> 了
  const context = useOutletContext();
  return <h1>Book {id}</h1>;
};

export default Book;
