import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Overview from "../pages/Overview";
import Tasks from "../pages/Tasks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Layout = () => {
  return (
    <div className="flex">
      <NavBar />
      <main className="flex-grow bg-[#F5F5F7] px-4">
        <Routes>
          <Route index path="/" element={<Overview />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
