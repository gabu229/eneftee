"use client";
import Image from "next/image";

import SolidButton from "@/components/Buttons/SolidButton";
import { ProductCard } from "@/components/Cards/ProductCard";
import Marquee from "react-fast-marquee";
import { HeroMarquee } from "@/components/Marquees/HeroMarquee";
import { CreatorCard } from "@/components/Cards/CreatorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-[90vh] flex flex-col justify-center items-center text-center my-14">
        <div className="w-full my-14 text-center">
          <p className="text-5xl xl:text-6xl max-w-screen-md leading-[120%] mx-auto">
            Discover and collect unique digital creations
          </p>
          <div className="my-12">
            <SolidButton content="Explore Collection" size="md" />
          </div>
        </div>

        <div className="w-full max-w-screen-xl flex flex-col gap-3 my-5 askew-y-3 overflow-hidden">
          <HeroMarquee />
        </div>
      </section>

      <section className="min-h-[50vh] my-36">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold text-xl">
                Featured Artworks
              </p>
            </div>
            <div>
              <SolidButton content="View all" size="sm" theme="light" />
            </div>
          </div>
          <div className="my-5">
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={1}
              className="p-4"
              navigation
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide className="">
                <ProductCard preview = "/nft-art-08.png" miscItems={[{label: "Units:", value: "1"}]} />
              </SwiperSlide>
              <SwiperSlide className="">
                <ProductCard preview = "/nft-art-02.png" miscItems={[{label: "Units:", value: "400"}]} />
              </SwiperSlide>
              <SwiperSlide className="">
                <ProductCard preview = "/nft-art-03.png" miscItems={[{label: "Units:", value: "12"}]} />
              </SwiperSlide>
              <SwiperSlide className="">
                <ProductCard preview = "/nft-art-04.png" miscItems={[{label: "Units:", value: "55"}]} />
              </SwiperSlide>
              <SwiperSlide className="">
                <ProductCard preview = "/nft-art-05.png" miscItems={[{label: "Units:", value: "999"}]} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] my-36">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold text-xl">Connect with creators</p>
            </div>
            <div>
              <SolidButton content="View all" size="sm" theme="light" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 my-5">
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
          </div>
        </div>
      </section>
    </>
  );
}
