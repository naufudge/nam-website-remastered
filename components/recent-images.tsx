import React from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const pics = [
    "/pics/1.jpg",
    "/pics/2.jpg",
    "/pics/3.jpg",
    "/pics/4.jpg"
]

const RecentImages = () => {
  return (
    <div className=''>
      <h1 className="text-center text-2xl font-semibold mb-2">Recent Images</h1>
      <div className="mx-auto w-fit mb-8"><hr className='h-1 w-24 rounded-full bg-blue-900' /></div>
      
      <div className=''>
      <Carousel
            plugins={[
                Autoplay({
                    delay: 4000,
                })
            ]}
            className='w-full max-w-sm mx-auto'
        >
            <CarouselContent>
                {pics.map((pic, index) => (
                    <CarouselItem key={index}>
                    <div className='w-fit'>
                        <Image
                        src={pic}
                        width={600}
                        height={600}
                        alt='pic 1'
                        className='mx-0'/>
                    </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
    </div>
  )
}

export default RecentImages;
