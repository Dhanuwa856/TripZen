import React from "react";
import Hero from "../Components/Hero/Hero";
import Gallery from "../Components/Gallery/Gallery";
import Minititle from "../Components/Minititle/Minititle";
import DestinationCard from "../Components/DestinationCard/DestinationCard";
import Booking from "../Components/Booking/Booking";
import Testimonial from "../Components/Testimonial/Testimonial";
import Faq from "../Components/Faq/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Minititle title="Discover Our Destinations" />
      <DestinationCard />
      <Minititle title="Plan Your Next Adventure" />
      <Booking />
      <Minititle title="Words from Our Happy Travelers" />
      <Testimonial />
      <Minititle title="Got Questions? We've Got Answers!" />
      <Faq />
    </>
  );
};

export default Home;
