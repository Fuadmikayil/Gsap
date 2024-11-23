import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const App = () => {

  const logoRef = useRef();
  const navBtnsRef = useRef()
  const tl = gsap.timeline({ defaults: { duration: 0.6 } });

  useEffect(() => {
    tl.fromTo(logoRef.current, { opacity: 0 ,x:-30 ,y:-20,scale:0.5}, { opacity: 1 ,x:0,y:0,scale:1});
    tl.fromTo(navBtnsRef.current, { opacity: 0 ,x:30,y:-20,scale:0.5}, { opacity: 1,x:0 ,y:0,scale:1},"<");

  }, []);

  return (
    <div>
      <header className="flex items-center justify-between py-4 px-8 bg-black text-white">
        <h1
          ref={logoRef}
          className='text-green-400  text-5xl italic tracking-wider font-["Montserrat"]'
        >
          GSAP
        </h1>
        <nav className="space-x-5">
          <a
            href="#"
            className=" text-gray-400 tracking-wide font-medium text-lg border-b-2 border-b-transparent transition duration-300 hover:text-white hover:border-b-white"
          >
            About
          </a>
          <a
            href="#"
            className=" text-gray-400 tracking-wide font-medium text-lg border-b-2 border-b-transparent transition duration-300 hover:text-white hover:border-b-white"
          >
            Contact
          </a>
          <a
            href="#"
            className=" text-gray-400 tracking-wide font-medium text-lg border-b-2 border-b-transparent transition duration-300 hover:text-white hover:border-b-white"
          >
            Services
          </a>
          <a
            href="#"
            className=" text-gray-400 tracking-wide font-medium  text-lg border-b-2 border-b-transparent transition duration-300 hover:text-white hover:border-b-white"
            xt-l
          >
            Products
          </a>
        </nav>
        <div className="space-x-3" ref={navBtnsRef}>
          <button className="text-gray-400">Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    </div>
  );
};

export default App;
