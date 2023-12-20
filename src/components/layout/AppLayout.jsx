import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import HeroWrapper from "./HeroWrapper";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex w-full h-full fixed left-0 top-0">
        <Sidebar />
        <HeroWrapper>
          <Outlet />
        </HeroWrapper>
      </div>
    </div>
  );
};

export default AppLayout;
