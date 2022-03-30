import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const RosterCards = (props) => {
  return (
    <div>
      <h2 id="artists">Artists</h2>

      {props.rosterData[0] &&
        //   as long as rosterData is not an empty array, map over it
        props.rosterData[0].information.map((artist) => (
          <div
            className="card"
            style={{
              width: "18rem",
              padding: "5px",
              border: "1px solid red",
              background: "#303030",
            }}
          >
            <img src={artist.pfp} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  color: "white",
                }}
              >
                {artist.name}
              </h5>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                <button
                  type="button"
                  class="btn btn-warning"
                  style={{
                    color: "white",
                    textShadow: "1px 2px #303030",
                    background: "#ECBD76",
                  }}
                >
                  Tickets
                </button>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RosterCards;
