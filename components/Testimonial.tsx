"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper required modules
import { Autoplay } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

// data
const testimonial = [
  {
    message:
      "Incredible attention to detail. The UI looks and feels fantastic!",
    name: "Anna Roberts / UX Designer",
  },
  {
    message:
      "Fast, reliable, and super clean code. A real pleasure to collaborate with.",
    name: "Michael Lee / Project Manager",
  },
  {
    message:
      "Turned our ideas into a beautiful, responsive website. Highly recommended!",
    name: "Sara Kim / Startup Founder",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent font-semibold">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
