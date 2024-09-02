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
    "/pics/4.jpg",
]

const RecentImages = () => {
  return (
    <div className='bg-blue-50 p-10'>
      <h1 className="text-center text-xl font-semibold mb-2">Recent Images</h1>
      <div className="mx-auto w-fit mb-8"><hr className='h-1 w-20 rounded-full bg-blue-900' /></div>
      
      <div className=''>
      <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                })
            ]}
            className='overflow-clip'>
            <CarouselContent className='mx-10'>
                {pics.map((pic, index) => (
                    <CarouselItem key={index} className='basis-full md:basis-full lg:basis-1/2 xl:basis-1/3'>
                    <div className='w-[400px] h-[300px] border-2 m-auto text-center bg-white rounded-md'>
                    <div className='w-full h-full bg-clip-content overflow-clip'>
                        <Image
                        src={pic}
                        width={600}
                        height={600}
                        alt={`pic-${index}`}
                        className='m-auto'/>
                    </div>
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
