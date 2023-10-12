import React from "react";
import "./testimonial.css";
import Avatar1 from "../../images/avatar1.jpg";
import Avatar2 from "../../images/avatar2.jpg";
import Avatar3 from "../../images/avatar3.jpg";
import Avatar4 from "../../images/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [];
  const data = [
    {
      avatar: Avatar1,
      name: "Tina Snow",
      review:
        "Good Projects Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, temporibus!",
    },
    {
      avatar: Avatar2,
      name: "Carlson Andrew ",
      review:
        "Nice keep it up Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam, maiores voluptates omnis vero possimus ipsa sequi beatae. Incidunt, sequi.",
    },
    {
      avatar: Avatar3,
      name: "Jhonny Dep",
      review:
        "Excellent job Lorem ipsum, dolor sit ametLorem ipsum dolor sit adipisicing elit. Id, fuga! consectetur adipisicing elit. Illum beatae vitae harum sint quam ex.",
    },
    {
      avatar: Avatar4,
      name: "Shatta Whale",
      review:
        "Magnificient work Lorem ipsum dolor sit amet Impedit lorem ipsum Iure mollitia excepturi consectetur dolore odit possimus debitis distinctio.",
    },
  ];

  data.map(({ avatar, name, review }, index) => {
    const testimonial = (
      <SwiperSlide key={index} className="testimonial">
        <div className="client__avatar">
          <img src={avatar} alt={`Avatar${index + 1}`} />
        </div>
        <h5 className="client__name">{name}</h5>
        <small className="client__review">{review}</small>
      </SwiperSlide>
    );
    return testimonials.push(testimonial);
  });
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials}
      </Swiper>
    </section>
  );
};

export default Testimonial;
