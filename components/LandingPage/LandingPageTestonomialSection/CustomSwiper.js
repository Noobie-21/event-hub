import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useSwiper } from "swiper/react";

const SwiperCustomButton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        className="absolute z-20 top-[9.5rem] left-0 text-black  flex justify-center items-center  transition-all  rounded-full cursor-pointer p-2 text-2xl bg-slate-300"
        onClick={() => swiper.slidePrev()}
      >
        <AiOutlineArrowLeft className="" />
      </button>

      <button
        className="absolute z-20 top-[9.5rem] right-0  flex justify-center items-center  transition-all  text-2xl rounded-full cursor-pointer p-2 bg-slate-300 text-black"
        onClick={() => swiper.slideNext()}
      >
        <AiOutlineArrowRight className="" />
      </button>
    </div>
  );
};

export default SwiperCustomButton;
