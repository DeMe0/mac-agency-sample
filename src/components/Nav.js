import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-xl navbar-dark bg-black"
        aria-label="Sixth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://res.cloudinary.com/ademeo/image/upload/v1648496834/mac/mac-agency-logo_kkcw5p.jpg"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample06"
            aria-controls="navbarsExample06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample06">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0">
              {/* <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Artists
                </a>
              </li>
              {/* <li className="nav-item">
        <a className="nav-link ">Contact Us</a>
      </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/instagram">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
