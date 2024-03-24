import React from "react";
import "./Booking.css";
import { motion } from "framer-motion";
const Booking = () => {
  return (
    <motion.div
      className="booking"
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
      <div className="booking-bg">
        <div className="bg-filter"></div>
        <div className="booking-form container">
          <h2>Booking Form</h2>
          <form action="/">
            <div>
              <h4>Name:</h4>
              <input type="text" placeholder="Enter Your Name..." required />
            </div>
            <div>
              <h4>Email:</h4>
              <input type="email" placeholder="Enter Your Email..." required />
            </div>
            <div>
              <h4>Phone Number:</h4>
              <input
                type="tel"
                placeholder="Enter Your Phone Number..."
                required
              />
            </div>
            <div>
              <h4>Check In Date:</h4>
              <input type="date" name="" id="" required />
            </div>
            <div>
              <h4>Check Out Date:</h4>
              <input type="date" name="" id="" required />
            </div>
            <div>
              <h4>Number of Guests:</h4>
              <input
                type="number"
                id="guests"
                name="guests"
                placeholder="Number of Guests..."
                required
              />
            </div>
            <div>
              <h4>Special Requests:</h4>
              <textarea
                id="special-requests"
                name="special-requests"
                placeholder="Special Requests..."
                required
              ></textarea>
            </div>
            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Booking;
