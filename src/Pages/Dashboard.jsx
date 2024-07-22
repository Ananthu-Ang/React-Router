import React from "react";
import "../Styles/Dashboard.css";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <nav className="navBar">
        <div className="navdiv">
          <p>DashBoard</p>
        </div>
      </nav>

      
      <div className="allDiv">
        <div className="sideBar">
          <Link to={"/"}>
            <p>Profile</p>
          </Link>
          <Link to={"/Messages"}>
            <p>Messages</p>
          </Link>
          <Link to={"/Settings"}>
            <p>Settings</p>
          </Link>
          <Link to={"/Blogs"}>
            <p>Blogs</p>
          </Link>
        </div>
        <div className="outlet">
        <Outlet />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
