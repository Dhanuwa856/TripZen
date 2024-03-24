import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Img_01 from "../../assets/g01.jpg";
import Img_02 from "../../assets/g02.jpg";
import Img_03 from "../../assets/g03.jpg";
import Img_04 from "../../assets/g04.jpg";
import Img_05 from "../../assets/g05.jpg";
import Img_06 from "../../assets/g06.jpg";
import Img_07 from "../../assets/g07.jpg";
import Img_08 from "../../assets/g08.jpg";
import Img_09 from "../../assets/g09.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
  const [scrollPosition02, setScrollPositon02] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollPosition02 === 0) {
        setTimeout(() => {
          setScrollPositon02(-10);
        }, 5000);
      } else if (scrollPosition02 === -10) {
        setScrollPositon02(-20);
      } else if (scrollPosition02 === -20) {
        setScrollPositon02(-30);
      } else if (scrollPosition02 === -30) {
        setScrollPositon02(-40);
      } else if (scrollPosition02 === -40) {
        setScrollPositon02(-50);
      } else if (scrollPosition02 === -50) {
        setScrollPositon02(-60);
      } else if (scrollPosition02 === -60) {
        setScrollPositon02(0);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [scrollPosition02]);
  return (
    <motion.div
      className="gallery container"
      initial={{
        y: 80,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        duration: 1,
      }}
    >
      <div className="gallery-btn">
        <button
          className={
            scrollPosition02 == 0 ? "prev-btn btn-non-active" : "prev-btn"
          }
          onClick={() => {
            if (scrollPosition02 === -60) {
              setScrollPositon02(-50);
            } else if (scrollPosition02 === -50) {
              setScrollPositon02(-40);
            } else if (scrollPosition02 === -40) {
              setScrollPositon02(-30);
            } else if (scrollPosition02 === -30) {
              setScrollPositon02(-20);
            } else if (scrollPosition02 === -20) {
              setScrollPositon02(-10);
            } else if (scrollPosition02 === -10) {
              setScrollPositon02(0);
            }
          }}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className={
            scrollPosition02 == -60 ? "next-btn btn-non-active" : "next-btn"
          }
          onClick={() => {
            if (scrollPosition02 === 0) {
              setScrollPositon02(-10);
            } else if (scrollPosition02 === -10) {
              setScrollPositon02(-20);
            } else if (scrollPosition02 === -20) {
              setScrollPositon02(-30);
            } else if (scrollPosition02 === -30) {
              setScrollPositon02(-40);
            } else if (scrollPosition02 === -40) {
              setScrollPositon02(-50);
            } else if (scrollPosition02 === -50) {
              setScrollPositon02(-60);
            }
          }}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="gallery-slider">
        <ul
          style={{
            transform: `translateX(${scrollPosition02}%)`,
          }}
        >
          <li>
            <img src={Img_01} alt="" />
            <div className="img-content">
              <h3>Wellness Retreats</h3>
            </div>
          </li>
          <li>
            <img
              src={Img_02}
              alt=""
              className={scrollPosition02 == 0 ? "img-color" : ""}
            />
            <div className="img-content">
              <h3>Culinary Delights</h3>
            </div>
          </li>
          <li>
            <img
              src={Img_03}
              alt=""
              className={scrollPosition02 == -10 ? "img-color" : ""}
            />
            <div className="img-content">
              <h3>Adventure Thrills</h3>
            </div>
          </li>
          <li>
            <img
              src={Img_04}
              alt=""
              className={scrollPosition02 == -20 ? "img-color" : ""}
            />
            <div className="img-content">
              <h3>Historical Journeys</h3>
            </div>
          </li>
          <li>
            <img
              src={Img_05}
              alt=""
              className={scrollPosition02 == -30 ? "img-color" : ""}
            />
            <div className="img-content">
              <h3>Wildlife Encounters</h3>
            </div>
          </li>
          <li>
            <img
              src={Img_06}
              alt=""
              className={scrollPosition02 == -40 ? "img-color" : ""}
            />
            <div className="img-content">
              <h3>Cultural Immersions</h3>
            </div>
          </li>
          <li>
            <img
              src={Img_07}
              alt=""
              className={scrollPosition02 == -50 ? "img-color" : ""}
            />
            <div className="img-content">
              <h3>Beach Escapes</h3>
            </div>
          </li>
          <li>
            <img
              src={Img_08}
              alt=""
              className={scrollPosition02 == -60 ? "img-color" : ""}
            />
            <div className="img-content">
              <h3>Mountain Adventures</h3>
            </div>
          </li>
          <li>
            <img src={Img_09} alt="" />
            <div className="img-content">
              <h3>City Explorations</h3>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Gallery;
