import React from "react";
import "./DestinationCard.css";
import Card_01 from "../../assets/card01.jpg";
import Card_02 from "../../assets/card02.jpg";
import Card_03 from "../../assets/card03.jpg";
import Card_04 from "../../assets/card04.jpg";
import Card_05 from "../../assets/card05.jpg";
import Card_06 from "../../assets/card06.jpg";
import Card_07 from "../../assets/card07.jpg";
import Card_08 from "../../assets/card08.jpg";
import Card_09 from "../../assets/card09.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DestinationCard = () => {
  return (
    <>
      <div className="destination-cards container">
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
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
          <img src={Card_01} alt="" />
          <div className="card-content">
            <h4>Santorini, Greece</h4>
            <hr />
            <p>
              Explore the enchanting whitewashed villages, iconic blue-domed
              churches, and breathtaking sunsets of this picturesque Greek
              island.
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> Greek Islands
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 5 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $1500
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
        >
          <img src={Card_02} alt="" />
          <div className="card-content">
            <h4>Kyoto, Japan</h4>
            <hr />
            <p>
              Immerse yourself in the rich culture and history of Kyoto, where
              ancient temples, traditional tea houses, and serene gardens await.
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> Kansai Region
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 4 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $2000
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        >
          <img src={Card_03} alt="" />
          <div className="card-content">
            <h4>Machu Picchu, Peru</h4>
            <hr />
            <p>
              Embark on a journey to the mystical ruins of Machu Picchu, nestled
              high in the Andes Mountains, and uncover the secrets of the
              ancient Inca civilization.
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> Andes Mountains
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 8 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $2500
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
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
          <img src={Card_04} alt="" />
          <div className="card-content">
            <h4>Safari in Serengeti National Park, Tanzania</h4>
            <hr />
            <p>
              Witness the awe-inspiring beauty of the African savannah and
              experience the thrill of spotting lions, elephants, and other
              wildlife on a safari adventure.{" "}
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> Northern Tanzania
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 5 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $3000
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
        >
          <img src={Card_05} alt="" />
          <div className="card-content">
            <h4>Dubai, United Arab Emirates</h4>
            <hr />
            <p>
              Discover the modern marvels of Dubai, from towering skyscrapers
              and luxury shopping malls to desert safaris and pristine beaches.{" "}
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> Arabian Peninsula
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 10 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $1800
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        >
          <img src={Card_06} alt="" />
          <div className="card-content">
            <h4>Sri Lanka</h4>
            <hr />
            <p>
              Delve into the diverse landscapes and cultural treasures of Sri
              Lanka, from lush tea plantations and ancient temples to pristine
              beaches and wildlife-rich national parks.{" "}
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> South Asia
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 15 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $2200
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
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
          <img src={Card_07} alt="" />
          <div className="card-content">
            <h4>Reykjavik, Iceland</h4>
            <hr />
            <p>
              Experience the otherworldly landscapes of Iceland in Reykjavik,
              where geothermal hot springs, majestic waterfalls, and the
              mesmerizing Northern Lights await.{" "}
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> Southwest Iceland
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 6 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $2800
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
        >
          <img src={Card_08} alt="" />
          <div className="card-content">
            <h4>Rio de Janeiro, Brazil</h4>
            <hr />
            <p>
              Soak up the vibrant energy and stunning scenery of Rio de Janeiro,
              with its iconic landmarks like Christ the Redeemer, Copacabana
              Beach, and Sugarloaf Mountain.{" "}
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> Southeast Brazil
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 7 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $1900
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="destination-card"
          initial={{
            y: 70,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        >
          <img src={Card_09} alt="" />
          <div className="card-content">
            <h4>Amalfi Coast, Italy</h4>
            <hr />
            <p>
              Indulge in the romance and charm of the Amalfi Coast, where
              dramatic cliffs, pastel-colored villages, and azure waters create
              a breathtaking backdrop for your Italian getaway.{" "}
            </p>
            <hr />
            <div className="card-footer">
              <h5>
                <i class="fa-solid fa-location-dot"></i> Southern Italy
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days"></i> 8 Days
              </h5>
              <h5>
                <i class="fa-regular fa-credit-card"></i> $2600
              </h5>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.button
        className="btn explore-button"
        initial={{
          y: 70,
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
        <Link to="/destinations" className="w-btn">
          Explore More
        </Link>
      </motion.button>
    </>
  );
};

export default DestinationCard;
