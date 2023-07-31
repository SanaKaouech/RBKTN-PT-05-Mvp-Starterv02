import React from "react";
import { Outlet, Link } from "react-router-dom";
import Photo from "./components/photo.jsx";

const Layout = () => {
  return (
    <>
    <div className="centered-container">
    <h1 className="Titre1">Welcome to My Web Site</h1>
    </div>
    <Photo />
      <nav className="navbar">
        <ul>
          <li>
          <Link to="/all">Home</Link>
          </li>
          <li>
            <Link to="/home">Pets List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;