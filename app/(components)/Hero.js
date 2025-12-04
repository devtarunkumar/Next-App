"use client"
 
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useAppContext } from "../(context)/AppContext";

function Hero() {
    const { router } = useAppContext()
    const slides = [
        {
            headline: "Your All-in-One Gadget Store",
            subheadline: "Everything In One Place",
            image: "/product31.jpg",
        },
        {
            headline: "Gear up with the latest electronics",
            subheadline: "Durable and Efficient Products",
            image: "/product32.jpg",
        },
    ];

    return (
        <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">   {/* 👈 CONTAINER ADDED */}
            <Carousel className="w-full">
                <CarouselContent className="gap-4 pl-5">
                    {slides.map((slide, index) => (
                        <CarouselItem
                            key={index}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="h-screen sm:h-[450px] xl:h-[500px] relative rounded-2xl overflow-hidden shadow-xl"
                        >

                            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>

                            {/* CONTENT */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-12 text-black max-w-xl space-y-4 sm:space-y-5">

                                {/* HEADLINE */}
                                <h2 className="text-blue-500 font-extrabold text-[28px] sm:text-[36px] tracking-wide leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] uppercase">
                                    {slide.headline}
                                </h2>

                                {/* SUBHEADLINE */}
                                <p className="text-[34px] sm:text-[42px] text-black font-semibold leading-tight tracking-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)]">
                                    {slide.subheadline}
                                </p>

                                {/* DISCOUNT SECTION */}
                                <div className="mt-6 flex items-end gap-5">
                                    <span className="text-[16px] sm:text-[18px] font-semibold text-black/70 writing-mode-vertical-rl rotate-270 tracking-[3px]">
                                        UP TO
                                    </span>

                                    <h1 className="text-[58px] sm:text-[75px] font-extrabold text-black leading-none tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
                                        40% OFF
                                    </h1>
                                </div>

                                {/* PRICE */}
                                <div className="text-lg sm:text-xl font-semibold mt-4">
                                    <h3 className="opacity-80 text-[18px] tracking-wide pt-4">Starting At</h3>
                                    <div className="text-[38px] sm:text-[46px] font-extrabold tracking-tight flex items-end gap-1 mt-5">
                                        <span className="text-red-500">$</span>
                                        99
                                        <span className="text-red-500 text-[30px] sm:text-[34px]">.99</span>
                                    </div>
                                </div>

                                {/* BUTTON */}
                                <Button
                                    onClick={()=> router.push('/collection')}
                                    className="bg-black text-white font-semibold hover:bg-neutral-900 transition-all duration-300 px-8 py-5 text-[18px] rounded-xl shadow-[0_5px_12px_rgba(0,0,0,0.3)] tracking-wide"
                                >
                                    Shop Now
                                    <MoveRight className="ml-2" size={22} />
                                </Button>

                            </div>

                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="bg-white/80 backdrop-blur-md hover:bg-white text-black shadow-md" />
                <CarouselNext className="bg-white/80 backdrop-blur-md hover:bg-white text-black shadow-md" />
            </Carousel>
        </div>
    );
}

export default Hero;
