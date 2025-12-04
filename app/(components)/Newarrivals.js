"use client"
import React, { useEffect, useState } from 'react'
import Title from './Title'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useAppContext } from '../(context)/AppContext';
import Item from './Item';

function Newarrivals() {
    const { products } = useAppContext()
    const [newArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        const data = products.slice(0, 5);
        setNewArrivals(data)
    }, [products])

    return (
        <section className="max-padd-container pt-20">
            <Title
                title1="New"
                title2="Arrivals"
                titlestyles="pb-10"
                parastyles="!block"
            />

            <Carousel
                opts={{ align: "start", loop: true }}
                className="relative w-full"
            >
                <CarouselContent className="flex items-stretch">
                    {newArrivals.map((product) => (
                        <CarouselItem
                            key={product.id}
                            className="
                                basis-1/2 
                                md:basis-1/3 
                                lg:basis-1/4 
                                xl:basis-1/5 
                                p-2
                            "
                        >
                            <div className="
                                bg-white dark:bg-neutral-900 
                                rounded-xl shadow-sm 
                                border border-transparent 
                                hover:border-gray-300 
                                transition-all duration-300
                                h-full
                            ">
                                <Item product={product} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* ICONS FIX: FULLY CLICKABLE NOW */}
                <CarouselPrevious
                    className="
                        absolute -left-3 top-1/2 -translate-y-1/2
                        z-50
                        h-10 w-10
                        rounded-full
                        bg-black/70 text-white
                        hover:bg-black
                        flex items-center justify-center
                        cursor-pointer
                    "
                />

                <CarouselNext
                    className="
                        absolute -right-3 top-1/2 -translate-y-1/2
                        z-50
                        h-10 w-10
                        rounded-full
                        bg-black/70 text-white
                        hover:bg-black
                        flex items-center justify-center
                        cursor-pointer
                    "
                />
            </Carousel>
        </section>
    )
}

export default Newarrivals;
