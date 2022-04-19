import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import "../App.css";
import "./instaPage.css";

const InstaPage = (props) => {
  return (
    <div>
      <Nav />
      <a href="http://instagram.com/mac.agency/">
        <div
          className="ig-container"
          style={{
            marginTop: "10%",
          }}
        >
          <div>
            <img
              class="ig-header"
              src="https://res.cloudinary.com/ademeo/image/upload/v1650334934/mac/mac-instagram-header_tbaqsf.png"
              alt="header"
            />
          </div>
          <div id="pictures">
            <div class="ig-row">
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337110/mac/instagram-page/mac-ig-post-1_hnzpq5.jpg"
                alt="pic-1"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337110/mac/instagram-page/mac-ig-post-2_hsvwev.jpg"
                alt="pic-2"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337110/mac/instagram-page/mac-ig-post-3_zusoum.jpg"
                alt="pic-3"
              />
            </div>
            <div class="ig-row">
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337110/mac/instagram-page/mac-ig-post-4_bfyduc.jpg"
                alt="pic-4"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337110/mac/instagram-page/mac-ig-post-5_t846o8.jpg"
                alt="pic-5"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337110/mac/instagram-page/mac-ig-post-6_pzrtwx.jpg"
                alt="pic-6"
              />
            </div>
            <div class="ig-row">
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337110/mac/instagram-page/mac-ig-post-7_z5gnok.jpg"
                alt="pic-7"
              />

              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337109/mac/instagram-page/mac-ig-post-8_ecd2zr.jpg"
                alt="pic-8"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337110/mac/instagram-page/mac-ig-post-9_nvolbk.jpg"
                alt="pic-9"
              />
            </div>
            <div class="ig-row">
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337109/mac/instagram-page/mac-ig-post-10_zy5tjr.jpg"
                alt="pic-10"
              />

              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337109/mac/instagram-page/mac-ig-post-11_nq5yh5.jpg"
                alt="pic-11"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337109/mac/instagram-page/mac-ig-post-12_vopezk.jpg"
                alt="pic-12"
              />
            </div>
            <div class="ig-row">
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337109/mac/instagram-page/mac-ig-post-13_tkwfs1.jpg"
                alt="pic-13"
              />

              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337108/mac/instagram-page/mac-ig-post-14_equudh.jpg"
                alt="pic-14"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337109/mac/instagram-page/mac-ig-post-15_ktx75o.jpg"
                alt="pic-15"
              />
            </div>
            <div class="ig-row">
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337108/mac/instagram-page/mac-ig-post-16_t2p7p7.jpg"
                alt="pic-16"
              />

              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337108/mac/instagram-page/mac-ig-post-17_qtif6u.jpg"
                alt="pic-17"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337108/mac/instagram-page/mac-ig-post-18_l5m4wy.jpg"
                alt="pic-18"
              />
            </div>
            <div class="ig-row">
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337109/mac/instagram-page/mac-ig-post-19_s1wzur.jpg"
                alt="pic-19"
              />

              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337108/mac/instagram-page/mac-ig-post-20_ma8c6f.jpg"
                alt="pic-20"
              />
              <img
                class="ig-image"
                src="https://res.cloudinary.com/ademeo/image/upload/v1650337107/mac/instagram-page/mac-ig-post-21_lfqgcb.jpg"
                alt="pic-21"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default InstaPage;
