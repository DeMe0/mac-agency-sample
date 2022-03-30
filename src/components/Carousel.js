import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import daBabyPhoto from "../media/dababy-pfp.png";
import daBabyGif from "../media/dababy-carousel-gif.gif";
import nbaYoungboyGif from "../media/nba-youngboy-carousel-gif.gif";
import moneybaggYoGif from "../media/moneybagg-yo-carousel-gif.gif";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          style={{
            height: "15%",
          }}
        >
          <img
            src={daBabyGif}
            class="d-block w-100"
            alt="dababy"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div
          class="carousel-item"
          style={{
            height: "15%",
          }}
        >
          <img
            src={nbaYoungboyGif}
            class="d-block w-100"
            alt="..."
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        <div
          class="carousel-item"
          style={{
            height: "15%",
          }}
        >
          <img
            src={moneybaggYoGif}
            class="d-block w-100"
            alt="..."
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            you
            rice
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
