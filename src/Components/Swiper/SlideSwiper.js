import React from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
export const SlideSwiper = ({ children }) => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        className="mySwiper"
      >
        {children}
        <span>...</span>
      </Swiper>
    </>
  );
};

SlideSwiper.propTypes = {
  children: PropTypes.node.isRequired,
};
