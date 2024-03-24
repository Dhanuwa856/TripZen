import React, { useEffect, useState } from "react";
import "./Hero.css";
import Hero_img_01 from "../../assets/hero-bg-01.jpg";
import Hero_img_02 from "../../assets/hero-bg-02.jpg";
import { Link } from "react-router-dom";
import Hero_icon from "../../assets/hero-right.gif";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollPosition, setScrollPositon] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollPosition === 0) {
        setTimeout(() => {
          setScrollPositon(-50);
        }, 5000);
      } else if (scrollPosition === -50) {
        setScrollPositon(0);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [scrollPosition]);

  return (
    <div className="hero">
      <div className="slider">
        <ul
          className="content"
          style={{
            transform: `translateX(${scrollPosition}%)`,
          }}
        >
          <li>
            <img src={Hero_img_01} alt="" className="slider-img" />
            <div class="overlay"></div>
            <div className="hero-content container">
              <div className="hero-left">
                <motion.h2
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
                  Discover Your <br /> Next Adventure
                </motion.h2>
                <motion.h4
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
                    duration: 1.4,
                  }}
                >
                  Explore breathtaking destinations and create unforgettable
                  memories
                </motion.h4>
                <motion.p
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
                    duration: 1.8,
                  }}
                >
                  Plan your perfect getaway with TripZen. From exotic beaches to
                  majestic mountains, we've got you covered.
                </motion.p>
                <motion.button
                  className="btn"
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
                    duration: 2,
                  }}
                >
                  <Link to="/destinations" className="hero-btn">
                    Explore Destinations
                  </Link>
                </motion.button>
                <motion.img
                  src={Hero_icon}
                  alt=""
                  className="globle-icon"
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
                    duration: 2.4,
                  }}
                />
              </div>
            </div>
          </li>
          <li>
            <img src={Hero_img_02} alt="" className="slider-img" />
            <div class="overlay"></div>
            <div className="hero-content container">
              <div className="hero-left hero-left02">
                <h2>
                  Embark on a Journey <br /> of Discovery and Wonder
                </h2>
                <h4>Discover Hidden Gems and Forge Lasting Adventures</h4>
                <p>
                  Craft Your Ideal Escape with TripZen. Whether it's Sun-Kissed
                  Shores or Towering Peaks, We've Got Every Dream Covered
                </p>
                <button className="btn">
                  <Link to="/guides" className="hero-btn">
                    Explore Travel Guides
                  </Link>
                </button>
                <img src={Hero_icon} alt="" className="globle-icon" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
