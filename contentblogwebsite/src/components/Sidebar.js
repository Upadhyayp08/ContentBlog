import React, { useState } from "react";
import { useNavigate } from "react-router";

function SidebarMenu() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavigate = (params) => {
    if (params === "Home") {
      navigate("/");
    } else {
      navigate("/addblog");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => handleNavigate("Home")}
        >
          AP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn" onClick={() => handleNavigate("Home")}>
                Home
              </button>
            </li>
            <li className="nav-item dropdown">
              {/* <a
                className="nav-link active"
                aria-current="page"
                href="/addblog"
                // onClick={navigate("/addblog")}
              >
                Add New Blog
              </a> */}
              <button className="btn" onClick={() => handleNavigate("AddBlog")}>
                Add New Blog
              </button>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SidebarMenu;
