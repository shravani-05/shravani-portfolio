/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

/***
 * components
 */

import { ButtonPrimary } from './Button';
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
    const settings = {
        infinite: true,  // Enable looping
        autoplay: true,  // Enable auto-sliding
        autoplaySpeed: 2000, // Set speed for autoplay in milliseconds
        dots: false,      // Disable dots navigation
        arrows: false,    // Disable arrows (next/prev)
        speed: 500,       // Transition speed
        slidesToShow: 1,  // Show 1 image at a time
        slidesToScroll: 1, // Scroll 1 image at a time
      };
  return (

    <section 
    id="home"
    className="pt-20 lg:pt-10 "
    >
    <div className="container  lg: grid lg:grid-cols-2
    items-center lg:gap-x-7 lg:gap-y-0" >
    <div>
    <div className="flex items-center gap-7 text-zinc-700 text-2xl tracking-wide">
        <span className=" relative w-2 h-2 bg-purple-800 transform rotate-45">
            <span className="absolute inset-0 bg-white animate-ping transform rotate-45">
            
            </span>
        </span>
        <p className="">Hey!! Thanks for stopping by!!</p>
        

    </div>
   <h2 className='headline-1 max-w-[50ch] sm:max-w-[40ch] lg:max-w-[60ch] mt-5 mb-8 lg:mb-10 te'>
    Passionate Computer Engineer with a Passionate for 
    Problem-Solving and a Mindset for Innovation.
    </h2>
    <div className="flex items-center gap-3">
    <a href="/Shravani_Resume.pdf" download="Shravani_Resume.pdf">
    <ButtonPrimary 
        label="Download Resume"
        icon="download"
        classes=""
    />
</a>
    
        </div>
    </div>

    <div className=" hidden lg:block">
        <figure className="" >
            <img 
            src="/img/portfolio.png"
            width={656}
            height={800} 
            alt="Image" 
            className="w-full"
            />
        </figure>
    </div> 
    {/* <div className="hidden lg:block">
          <Slider {...settings}>
            <div>
              <img src="/img/portfolio.png" width={656} height={800} alt="Image 1" className="w-full" />
            </div>
            <div>
              <img src="/img/portfolio2.png" width={656} height={800} alt="Image 2" className="w-full" />
            </div>
            <div>
              <img src="/img/portfolio3.png" width={656} height={800} alt="Image 3" className="w-full" />
            </div>
          </Slider>
        </div> */}
    
    </div>

    </section>
    
    
    
  )
}

export default Hero