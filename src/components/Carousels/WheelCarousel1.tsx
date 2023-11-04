import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Mousewheel, EffectCreative } from "swiper/modules";
import PlayingCard from "@/components/Cards/PlayingCard";

export function WheelCarousel1() {
  return (
    <div className="flex h-full w-full py-6" id="cards-container">
      <Swiper
        style={{ margin: "auto auto", width: "100%" }}
        effect={"creative"}
        loop
        loopAdditionalSlides={2}
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
        <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PlayingCard squareColor="bg-lightgreen" />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PlayingCard squareColor="bg-lightpink" />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PlayingCard
            squareColor="bg-[lightblue]"
            mainText="Memory Lake App"
            paragraph="a place for your memories to meet you"
            buttonText="try out"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PlayingCard squareColor="bg-lightsalmon" />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PlayingCard squareColor="bg-khaki" />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PlayingCard squareColor="bg-lightsteelblue" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
