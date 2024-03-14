import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, animateScroll as scrollSpy } from "react-scroll/modules";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <header className="flex w-full top-0 bg-white sticky justify-between items-center h-20 px-4  z-10 text-black">
      {/* logo */}
      <div>
        <h1>
          <span className="flex">
            {" "}
            <img
              src="https://s3-alpha-sig.figma.com/img/23ca/cccb/153e16e74e0ad9ef5927308b0467232a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6YNvLIrRIGsW9lOs-So9bvwlv9k0HoVofSGCuToOzM9EB62uxNHvk106ISc7dF~SVDxAbEeup8glDPQQhe5gSuF3U9u-imePOYQ3SPXfcMm7Nw8qfE1CRKPhaCJ1qvml01JTqLQ25NZAUlfJ1EsCvbooDNGL5KFL5KuR5TV43TR14J9mzLlcJdbpyU8JB-j1YHlNX78uePFWUs73tJLMJMTAGi6yRvmPbR30Ydq351Lkqi5~gVOur5rnrG~-N-0TfbjI857HgNOhXQyYcMCqP3vLkMJr6v5zRqY0iWbRA5A8bMVRnj4nUgoHQ~CEPgFbx2X6MJyH7q3B4YFcduPJQ__"
              alt=""
              className="h-[55px] top-[13px] left-[7px]"
            />
            <span className="text-primary pt-4">SALESUPTO</span>{" "}
          </span>{" "}
        </h1>
      </div>

      {/* search bar  */}
      <div class="flex w-full md:w-1/3">
        <input
          class="flex h-10 w-full rounded-full border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="Search your fav store :)"
          placeholder="Search your fav store :)"
        />
        <button type="submit" className="">
          search
        </button>
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
