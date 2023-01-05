import React from "react";
import "./index.css";
import Home from "./routes/Home"; //引入Home頁面
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom"; //引入路由

import ReactGA from "react-ga4";
ReactGA.initialize("G-2JQ0JPCXN9");
ReactGA.send("pageview");

function App() {
  return (
    <>
      {/* 建立路由 */}
      <Routes>
        <Route path="/cocohsieh-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

// 建立頁面：引入 react-router-dom
// 建立路由：Routes 包 Route->element(頁面js檔)
