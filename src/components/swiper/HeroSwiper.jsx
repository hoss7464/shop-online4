import React from "react";
import "./Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSwiper = ({ data, sliceStart, sliceEnd, CustomComponent }) => {
  const slicedData = sliceEnd
    ? data.slice(sliceStart, sliceEnd)
    : data.slice(sliceStart);
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          577: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {slicedData.map((myData, index) => (
          <SwiperSlide className="swiper-slide1" key={index}>
            <CustomComponent
              sliderName={myData.header}
              sliderPrice={myData.price}
              sliderImg={myData.picture}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSwiper;
