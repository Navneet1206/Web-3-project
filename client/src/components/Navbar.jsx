import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuth } from "../context/AuthContext"; // Import Auth Context
import "./Nav.css";

// NavBarItem component to render each navigation item
const NavBarItem = ({ title, link }) => (
  <li className="mx-4 cursor-pointer just__list">
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "text-blue-500 active-class" : "text-white"
      }
      end
    >
      {title}
    </NavLink>
  </li>
);

const Navbar = () => {
  const { user, logout } = useAuth(); // Access user and logout function from useAuth
  const [toggleMenu, setToggleMenu] = React.useState(false); // State to toggle mobile menu

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 bg-gray-800">
      {/* Logo Section */}
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>

      {/* Desktop Menu */}
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          { title: "Home", link: "/" },
          { title: "Services", link: "/services" },
          { title: "Transactions", link: "/transactions" },
          { title: "Tutorials", link: "/tutorials" },
          { title: "Contact-Us", link: "/contact-us" },
        ].map((item, index) => (
          <NavBarItem key={index} title={item.title} link={item.link} />
        ))}
        {user ? (
          <li
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
            onClick={logout}
          >
            Logout
          </li>
        ) : (
          <li></li>
        )}
      </ul>

      {/* Mobile Menu */}
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}

        {toggleMenu && (
          <ul className="wrapper__list z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md bg-gray-900 text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              { title: "Home", link: "/" },
              { title: "Services", link: "/services" },
              { title: "Transactions", link: "/transactions" },
              { title: "Tutorials", link: "/tutorials" },
              { title: "Contact-Us", link: "/contact-us" },
            ].map((item, index) => (
              <NavBarItem key={index} title={item.title} link={item.link} />
            ))}
            {user ? (
              <li
                className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                onClick={logout}
              >
                Logout
              </li>
            ) : (
              <li></li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
