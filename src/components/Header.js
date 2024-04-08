import React from "react";
import { HashLink as Link} from "react-router-hash-link"; 

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg max-w-screen h-30">
      <img
        className="ml-20 w-60 h-28"
        alt="logo"
        src="https://coderixx.com/assets/images/Logo2%20(1).png"
      />
      <ul className="flex p-2 mb-8 text-white text-xl tracking-wide w-50 h-21 gap-[44px]">
        <li className="p-4 text-purple-400">
          <Link to="/">Home</Link> {/* Link to Home component */}
        </li>
        <li className="p-4 hover:text-orange-400">
          <Link to="#Testimonials" smooth>Testimonials</Link> {/* Link to Testimonials component */}
        </li>
        <li className="p-4 hover:text-orange-400">
          <Link to="#Services" smooth>Services</Link> {/* Link to Services component */}
        </li>
        <li className="p-4 hover:text-orange-400">
          <Link to="#Projects" smooth>Projects</Link> {/* Link to Projects component */}
        </li>
        <li className="p-4 hover:text-orange-400">
          <Link to="#Footer" smooth>Blog</Link> {/* Link to Blog component */}
        </li>
      </ul>

      <button className="relative flex h-[50px] mb-2 w-40 items-center justify-center overflow-hidden bg-purple-400 mr-4 rounded-md text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out hover:shadow-black hover:text-white border-purple-800 hover:before:h-56 hover:before:w-56">
        <span className="relative z-10">CONTACT US</span>
      </button>
    </div>
  );
};

export default Header;
