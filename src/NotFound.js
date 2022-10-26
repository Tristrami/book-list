import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  // 我们可以通过 useNavigate() hook 获取 navigate 函数来执行重定向，相比
  // 使用 <Navigate /> 组件，用这种方式进行重定向导航更加普遍
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // 当 to=-1 时，相当于在浏览器点了下返回键，-2 相当于点两下返回，而正数相
      // 当于前进键；指定 state 值后 react 会将接下来重定向的 url 的 location
      // 对象中的 state 设置为我们指定的 state，所以 / 的 state 变为了 "Error! 
      // Page not found!"
      navigate("/", { state: "Error! Page not found!" });
    }, 2000)
  }, [])

  return(
    // 在渲染 NotFound 组件时，发现 <navigate /> 标签，react 会自动将页面
    // 导航到 to 属性所指的 url；<Navigate /> 拥有 <Link /> 中的属性，只不
    // 过它是自动导航
    // <Navigate to="/" />
    <h1>Page not found, redirect to home page ... </h1>
  );
};

export default NotFound;
