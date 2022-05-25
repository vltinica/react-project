import React from "react";
import "./testimonials.css";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: AVTR1,
      client__name: "Tina Snow",
      title: "Avatar One",
      client__review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatem quisquam omnis. Voluptas voluptates, exercitationem laudantium ducimus qui, accusantium beatae recusandae, expedita tempore commodi consequatur.",
    },
    {
      id: 2,
      image: AVTR2,
      client__name: "Shatta Wale",
      client__review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatem quisquam omnis. Voluptas voluptates, exercitationem laudantium ducimus qui, accusantium beatae recusandae.",
    },
    {
      id: 3,
      image: AVTR3,
      client__name: "Kwame Despite",
      client__review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatem quisquam omnis. Voluptas voluptates, exercitationem laudantium ducimus qui, accusantium beatae recusandae, expedita tempore commodi consequatur, exercitationem laudantium ducimus.",
    },
    {
      id: 4,
      image: AVTR4,
      client__name: "Nana Ama McBrown",
      client__review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatem quisquam omnis. Voluptas voluptates, exercitationem laudantium ducimus qui, accusantium beatae recusandae. Tempore voluptatem quisquam omnis.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Rewiew form clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, client__name, title, client__review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={title} />
              </div>
              <div>
                <h5 className="client__name">{client__name}</h5>
                <small className="client__review">{client__review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
