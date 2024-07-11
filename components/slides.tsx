import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

  
const pics = [
    "/pics/01.jpg",
    "/pics/02.jpg",
    "/pics/03.jpg",
    "/pics/04.jpg"
]

const Slides = () => {
  return (
    <div className='mt-10 w-fit'>
        <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                })
            ]}
        >
            <CarouselContent>
                {pics.map((pic, index) => (
                    <CarouselItem key={index}>
                    <Image
                        src={pic}
                        width={600}
                        height={600}
                        alt='pic 1'
                        className=''
                    />
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />

        </Carousel>
    </div>
  )
}

export default Slides;
