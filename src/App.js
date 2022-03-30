import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Carousel from "./components/Carousel";
import RosterCards from "./components/RosterCards";

function App() {
  const [rosterData, setRosterData] = useState([]);
  const { getRosterData } = useContentful();

  useEffect(() => {
    getRosterData().then((response) => setRosterData(response));
  });

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-xl navbar-dark bg-black"
        aria-label="Sixth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/ademeo/image/upload/v1648496834/mac/mac-agency-logo_kkcw5p.jpg" />
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#artists">
                  Artists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Contact Us</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/mac.agency/?hl=en"
                >
                  Instagram
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Our Team</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/MajorArtistConcertsLLC/"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Carousel />
      <RosterCards rosterData={rosterData} />
      <div className="container">
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
}

export default App;
