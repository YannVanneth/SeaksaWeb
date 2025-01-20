import React from "react";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";

export default function Rootlayout() {
  return (
    <>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
}
