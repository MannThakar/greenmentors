"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HERO_CAROUSEL } from "@/utils/constants";

const Hero = () => {
  return (
    <div className="flex justify-between container bg-[#edf8f1] rounded-lg flex-row">
      <div className="md:w-3/5 pt-24 px-12 w-full">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[rgba(78,134,120,1)] to-[rgba(151,143,121,1)] text-transparent bg-clip-text">
          Green Mentors
        </h1>
        <p className="mt-4 md:w-11/12 w-full">
          Green Mentors is a non-government responsible education solution
          provider organization having special consultative status with the
          Economic and Social Council (ECOSOC) of the United Nations.
        </p>
        <div className="flex w-full items-center justify-between mt-10 gap-4">
          <Input
            type="text"
            placeholder="Search..."
            className="h-12 w-11/12 bg-white"
          />
          <Button
            type="submit"
            className="bg-[rgba(78,134,120,1)] text-white  rounded-md h-12 w-20 btn-grn"
          >
            <Search className="w-24 h-64 " />
          </Button>
        </div>

        <div className="mt-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {HERO_CAROUSEL.map((image, index) => (
                <CarouselItem className="basis-1/2" key={index}>
                  <Image
                    src={image}
                    alt={`associate-${index}`}
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="w-fit md:flex justify-end hidden">
        <Image
          src="/hero/01_HeroBanner.jpg"
          alt="logo"
          width={500}
          height={150}
          className="h-[700px] w-auto rounded-lg sm:hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;
