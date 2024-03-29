import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Mousewheel, EffectCreative } from "swiper/modules";
import PlayingCard from "@/components/Cards/PlayingCard";

export function WheelCarousel2() {
  return (
    <div className="flex h-full w-full py-6" id="cards-container">
      <Swiper
        style={{ paddingBlockEnd: "20%" }}
        effect={"creative"}
        loop
        loopAdditionalSlides={2}
        centeredSlides
        slidesPerView={2}
        breakpoints={{
          1024: {
            slidesPerView: "auto",
          },
        }}
        creativeEffect={{
          limitProgress: 2,
          prev: {
            translate: ["-100%", 0, 0],
            origin: "bottom right",
            rotate: [0, 0, -30],
          },
          next: {
            translate: ["100%", 0, 0],
            origin: "bottom left",
            rotate: [0, 0, 30],
          },
        }}
        direction={"horizontal"}
        mousewheel={true}
        modules={[Mousewheel, EffectCreative]}
      >
        <SwiperSlide style={{ flexShrink: "1 !important", width: "100%" }}>
          <PlayingCard squareColor="bg-lightgreen" />
        </SwiperSlide>
        <SwiperSlide style={{ flexShrink: "1 !important", width: "100%" }}>
          <PlayingCard squareColor="bg-lightpink" />
        </SwiperSlide>
        <SwiperSlide style={{ flexShrink: "1 !important", width: "100%" }}>
          <PlayingCard
            squareColor="bg-[lightblue]"
            mainText="Memory Lake App"
            paragraph="a place for your memories to meet you"
            buttonText="try out"
          />
        </SwiperSlide>
        <SwiperSlide style={{ flexShrink: "1 !important", width: "100%" }}>
          <PlayingCard squareColor="bg-lightsalmon" />
        </SwiperSlide>
        <SwiperSlide style={{ flexShrink: "1 !important", width: "100%" }}>
          <PlayingCard squareColor="bg-khaki" />
        </SwiperSlide>
        <SwiperSlide style={{ flexShrink: "1 !important", width: "100%" }}>
          <PlayingCard squareColor="bg-lightsteelblue" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
