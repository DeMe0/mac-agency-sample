import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const RosterCards = (props) => {
  return (
    <div
      className="artistsContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2
        id="artists"
        style={{
          margin: "1rem",
          color: "lightgray",
        }}
      >
        Artists
      </h2>
      <div
        class="row"
        style={{
          justifyContent: "center",
          maxWidth: "93%",
        }}
      >
        {props.rosterData[0] &&
          //   as long as rosterData is not an empty array, map over it
          props.rosterData[0].information.map((artist) => (
            <div
              className="card text-white bg-dark mb-3"
              id="cardz"
              style={{
                width: "18rem",
                padding: "5px 14px 14px 15px",
                margin: "20px",
              }}
            >
              <img
                src={artist.pfp}
                class="card-img-top bg-image hover-zoom"
                alt="..."
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  //   style={{
                  //     color: "white",
                  //   }}
                >
                  {artist.name}
                </h5>
              </div>
              {/* <div className="card-body">
                <a href={artist.tickets} className="card-link"></a>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RosterCards;
