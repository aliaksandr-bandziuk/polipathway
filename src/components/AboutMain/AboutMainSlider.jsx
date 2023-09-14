"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Card } from '../Card';

const AboutMainSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      // slidesPerView={1}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
      loop={true}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Card
          cardTitle="Our Mission"
          cardText="Have you always dreamed of studying in Europe or wanted to consider all opportunities? Our team of professionals is here to advise you and provide all the nessesary information."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          cardTitle="Our Team"
          cardText="With a team of experienced professionals, we are committed to providing personalized support and guidance to each of our clients."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          cardTitle="Our Strategy"
          cardText="Our team will guide you through the entire admission process, providing support with all the requirements visa applications, documents, and tuition."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutMainSlider;