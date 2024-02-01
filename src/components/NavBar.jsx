import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/Logo.png";
import overview_logo from "../assets/Navbar/category-2.png";
import task_logo from "../assets/Navbar/book.png";
import mentors_logo from "../assets/Navbar/user-octagon.png";
import message_logo from "../assets/Navbar/message.png";
import settings_logo from "../assets/Navbar/setting-2.png";

const NavBar = () => {
  const isSignInOrSignUp = () => {
    // Check for sign-in and sign-up paths
    return (
      window.location.pathname === "/signin" ||
      window.location.pathname === "/signup"
    );
  };

  return (
    <>
      {!isSignInOrSignUp() && (
        <nav className="bg-white text-[#8E92BC] flex flex-col w-64 h-screen shadow-lg px-6">
          <div className="flex items-center justify-center p-4">
            <img src={logo} alt="Logo" className="w-auto h-10" />
          </div>
          <ul className="mt-6 *:mb-6">
            <li className="p-4 hover:bg-gray-100 rounded-lg">
              <Link to="/" className="flex items-center">
                <img src={overview_logo} alt="" className="mr-4" />
                <span className="font-semibold">Overview</span>
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-100 rounded-lg">
              <Link to="/tasks" className="flex items-center">
                <img src={task_logo} alt="" className="mr-4" />
                <span className="font-semibold">Tasks</span>
              </Link>
            </li>

            <li className="p-4 hover:bg-gray-100 rounded-lg">
              <a href="/overview" className="flex items-center">
                <img src={message_logo} alt="" className="mr-4" />
                <span className="font-semibold">Message</span>
              </a>
            </li>
            {/* ... other menu items with similar structure ... */}
            <li className="p-4 hover:bg-gray-100 rounded-lg">
              <a href="/settings" className="flex items-center">
                <img src={settings_logo} alt="" className="mr-4" />
                <span className="font-semibold">Settings</span>
              </a>
            </li>
          </ul>
          <div className="bg-gray-700 p-4 mt-8 rounded-md">
            <h4 className="text-white font-semibold mb-4">Need Help?</h4>
            <a href="/help-center" className="text-white hover:underline">
              Visit our Help Center
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
