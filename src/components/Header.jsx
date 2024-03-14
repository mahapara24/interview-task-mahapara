import React from "react";
import logo from "../assets/logo.png";
import { Link, animateScroll as scrollSpy } from "react-scroll/modules";

const Header = () => {
  return (
    <header className="flex w-full top-0 sticky justify-between items-center h-20 px-4  z-10 text-black">
      {/* logo */}
      <div>
        <h1>
          <span className="flex">
            {" "}
            <img src={logo} alt="" className="h-[55px] top-[13px] left-[7px]" />
            <span className="text-primary">SALESUPTO</span>{" "}
          </span>{" "}
        </h1>
      </div>

      {/* search bar  */}
      <div class="w-full md:w-1/3">
        <input
          class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="Search your fav store :)"
          placeholder="Search your fav store :)"
        />
      </div>
      <div>
        {/* mobile nav bar header */}
        <ul className="hidden  md:flex space-x-4 text-md font-normal">
          <li className="hover:text-orange-500">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              activeClass="active"
              to="store"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              className="pt-2"
            >
              Store
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
