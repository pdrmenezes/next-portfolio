"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Mousewheel, EffectCreative } from "swiper/modules";

export function WheelCarouselWrapper({ projects }: { projects: ReadonlyArray<JSX.Element> }) {
  return (
    <Swiper
      style={{ margin: "auto auto", width: "100%" }}
      effect={"creative"}
      loop
      loopedSlides={2}
      centeredSlides
      slidesPerView={"auto"}
      breakpoints={{
        1024: {
          slidesPerView: 2,
        },
      }}
      creativeEffect={{
        limitProgress: 2,
        prev: {
          translate: ["-80%", "25%", 0],
          rotate: [0, 0, -30],
        },
        next: {
          translate: ["80%", "25%", 0],
          rotate: [0, 0, 30],
        },
      }}
      direction={"horizontal"}
      mousewheel={true}
      modules={[Mousewheel, EffectCreative]}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {project}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
