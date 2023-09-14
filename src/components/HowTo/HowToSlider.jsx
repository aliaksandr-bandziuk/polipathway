"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import {
  FaGraduationCap,
  FaPager,
  FaRegFileWord,
  FaRegIdCard,
  FaShippingFast,
  FaRegComments,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { CardLong } from '../CardLong';

export const HowToSlider = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        grabCursor={true}
        navigation={{
          nextEl: '.swiperButtonNext',
          prevEl: '.swiperButtonPrev',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
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
          <CardLong
            cardIcon={<FaGraduationCap color="#fff" fontSize="3em" />}
            cardTitle="Study Abroad"
            cardText="Studying abroad can be a life-changing experience that offers numerous benefits and opportunities. With our  support, you will have all the necessary knowledge to make informed decisions about your admission to universities in Poland."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLong
            cardIcon={<FaPager color="#fff" fontSize="3em" />}
            cardTitle="Visa Help"
            cardText="Personalized Visa application assistance: Obtaining a visa can be a confusing and time-consuming process, but we're here to make it easier. Our team guarantees high chances of obtaining European student visa."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLong
            cardIcon={<FaRegFileWord color="#fff" fontSize="3em" />}
            cardTitle="Documentary Consulting"
            cardText="We keep you informed of any additional documents based on your specific case. You can be sure that your documents will be prepared accurately and efficiently, giving you the best chance of admission and success in your study abroad."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLong
            cardIcon={<FaRegIdCard color="#fff" fontSize="3em" />}
            cardTitle="Residence Permit"
            cardText="We help with all the necessary documentation to apply for a residence permit. Our team is here to help you with every step of the way, from preparing document and filling out the application to submitting it and tracking its progress."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLong
            cardIcon={<FaShippingFast color="#fff" fontSize="3em" />}
            cardTitle="Transfer To Polish University"
            cardText="We are providing information about admission requirements, transfer credit policies, and application procedures. Great opportunity for students for want to change the university and country and not to loose their study process."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLong
            cardIcon={<FaRegComments color="#fff" fontSize="3em" />}
            cardTitle="English Preparatory Course"
            cardText="Agency will provide the opportunity to learn the language at the universities preparatory course for students who does not speak English at the required level. The course takes place at the choosen university."
          />
        </SwiperSlide>
      </Swiper>
      <button className="swiperButtonPrev">
        <FaChevronLeft color="#fff" fontSize="1.5em" />
      </button>
      <button className="swiperButtonNext">
        <FaChevronRight color="#fff" fontSize="1.5em" />
      </button>
    </>
  );
};