import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img_01 from "../../assets/user01.jpg";
import Img_02 from "../../assets/user02.jpg";
import Img_03 from "../../assets/user03.jpg";
import Img_04 from "../../assets/user04.jpg";
import Img_05 from "../../assets/user05.jpg";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      quote:
        "I had an amazing experience with TripZen! The accommodations were fantastic and the staff was incredibly helpful. Highly recommend!",

      image: Img_01,
    },
    {
      id: 2,
      name: "Jane Smith",
      quote:
        "TripZen made planning my vacation effortless. The variety of destinations offered and the seamless booking process exceeded my expectations.",

      image: Img_02,
    },
    {
      id: 3,
      name: "Michael Brown",
      quote:
        "I've traveled with TripZen multiple times and each time has been better than the last. Their attention to detail and customer service are unmatched.",

      image: Img_03,
    },
    {
      id: 4,
      name: "Emily Johnson",
      quote:
        "From start to finish, TripZen provided exceptional service. The itinerary suggestions were spot-on and made our trip unforgettable. Can't wait to book with them again!",

      image: Img_04,
    },
    {
      id: 5,
      name: "Sarah Davis",
      quote:
        "I couldn't be happier with my experience using TripZen. The personalized recommendations and hassle-free booking process made my trip stress-free and enjoyable.",

      image: Img_05,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container">
      <motion.div
        className="testimonial-carousel"
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
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <img src={testimonial.image} alt={testimonial.name} />
              <p className="quote">{testimonial.quote}</p>
              <p className="author"> {testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;
