"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { resolveCmsMediaUrl } from "@/lib/cms-media";

export default function Slider({ article }: { article: any }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="preview">
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: null, // Next товчийг идэвхгүй болгох
          prevEl: null,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
        className="main-swiper"
      >
        {article?.attachments?.map(
          (attachment: { url: any }, index: React.Key | null | undefined) => (
            <SwiperSlide key={index}>
              <img
                src={resolveCmsMediaUrl(attachment.url)}
                alt=""
                className="w-full md:w-[80%] h-[500px] mx-auto"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="thumb-swiper"
      >
        {article?.attachments?.map(
          (attachment: { url: any }, index: React.Key | null | undefined) => (
            <SwiperSlide key={index}>
              <img
                src={resolveCmsMediaUrl(attachment.url)}
                alt=""
                className={`thumbnail ${
                  selectedIndex === index ? "active" : ""
                }`}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
