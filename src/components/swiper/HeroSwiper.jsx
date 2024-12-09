import React from "react";
import "./Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//---------------------------------------------------------------------------------------------------

const HeroSwiper = ({
  slideNumber,
  data,
  sliceStart,
  sliceEnd,
  CustomComponent,
}) => {
  //---------------------------------------------------------------------------------------------------
  //To make swiper usable for slicing the product on database : 
  const slicedData = sliceEnd ? data.slice(sliceStart, sliceEnd) : data.slice(sliceStart);
  //---------------------------------------------------------------------------------------------------
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={slideNumber}
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {slicedData.map((myData, index) => (
          <SwiperSlide className="swiper-slide1" key={index}>
            {/* To make a custom compnent so that to replace whatever component we want **/}
            <CustomComponent
              sliderName={myData.header}
              sliderPrice={myData.price}
              sliderImg={myData.picture}
              sliderId={myData.id}
              sliderProduct={myData.product}
              sliderCategory={myData.category}
              sliderBrand={myData.brand}
              sliderCode={myData.code}
              sliderCurrentPrice={myData.currentPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSwiper;
