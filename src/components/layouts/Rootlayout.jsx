import React from "react";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";
import { ScrollProgressDemo } from "../ui/ScrollProgressDemo";

export default function Rootlayout() {
  return (
    <>
      <NavbarComponent />
      <ScrollProgressDemo className="h-[5px] text-primary" />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
}
