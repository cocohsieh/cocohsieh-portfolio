import React from "react";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ContactContent from "../components/ContactContent";

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* component的props */}
      <HeroImg2 heading="CONTACT" text="Please feel free to contact me!" />
      <ContactContent />
      <Footer />
    </>
  );
};

export default Contact;

// // useState是自變量
// // x是初始狀態，setX是更新狀態
// const [x, setX] = useState(0) //傳入初始值給x
// // 點了之後執行changeX函式，更新setX狀態
// const changeX = ()=> setX(x+1)
// return (
//   <>
//   <div style={{background:"white"}}>
//   <ul onClick={changeX}>
//     <li>x是{x}</li>
//   </ul>
//   </div>
//   </>
// );
