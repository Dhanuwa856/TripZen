import React, { useState } from "react";
import "./Faq.css";
import { motion } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data (question-answer pairs)
  const faqs = [
    {
      id: 1,
      question: "How do I book a trip?",
      answer:
        "Booking a trip with us is easy! Simply navigate to our booking section, select your desired destination, dates, and preferences, and follow the prompts to complete your booking.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. Additionally, we offer secure payment processing through PayPal.",
    },
    {
      id: 3,
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking, subject to our cancellation and modification policies. Please refer to your booking confirmation email or contact our customer service team for assistance.",
    },
    {
      id: 4,
      question: " How can I contact customer support?",
      answer:
        "You can reach our customer support team by phone at 1-800-123-4567 during our business hours, or you can send us an email at support@example.com. We're here to assist you with any inquiries or concerns you may have.",
    },
    {
      id: 5,
      question: "Are there any hidden fees or charges?",
      answer:
        "No, we believe in transparent pricing. The total cost of your booking, including any taxes and fees, will be clearly displayed before you confirm your reservation. You can rest assured that there are no hidden fees or charges.",
    },
    {
      id: 6,
      question: "Can I customize my travel itinerary?",
      answer:
        "Absolutely! We understand that every traveler has unique preferences and interests. You can customize your travel itinerary by selecting specific activities, excursions, and accommodations that align with your preferences. Simply let us know your preferences during the booking process, and we'll tailor your itinerary accordingly.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section container">
      <motion.h2
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
        Frequently Asked Questions
      </motion.h2>
      <motion.div
        className="faq-items"
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
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div
              className={`question ${
                activeIndex === index ? "active-index" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="toggle-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
