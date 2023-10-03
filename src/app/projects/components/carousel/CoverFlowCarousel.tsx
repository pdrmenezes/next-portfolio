import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Mousewheel, EffectCoverflow } from "swiper/modules";
import PlayingCard from "@/components/PlayingCard/PlayingCard";

export function CoverFlowCarousel() {
  return (
    <div className="w-full h-full">
      <Swiper
        effect={"coverflow"}
        centeredSlides
        loop
        loopedSlides={2}
        coverflowEffect={{
          slideShadows: false,
          rotate: 5,
          depth: 100,
          modifier: 1,
        }}
        direction={"horizontal"}
        slidesPerView={3}
        mousewheel={true}
        modules={[Mousewheel, EffectCoverflow]}
      >
        <SwiperSlide>
          <PlayingCard squareColor="bg-lightgreen" />
        </SwiperSlide>
        <SwiperSlide>
          <PlayingCard squareColor="bg-lightpink" />
        </SwiperSlide>
        <SwiperSlide>
          <PlayingCard
            squareColor="bg-[lightblue]"
            mainText="Memory Lake App"
            paragraph="a place for your memories to meet you"
            buttonText="try out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PlayingCard squareColor="bg-lightsalmon" />
        </SwiperSlide>
        <SwiperSlide>
          <PlayingCard squareColor="bg-khaki" />
        </SwiperSlide>
        <SwiperSlide>
          <PlayingCard squareColor="bg-lightsteelblue" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
