// export default Hero;
/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

/***
 * components
 */

import { ButtonPrimary } from './Button';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        infinite: true,  
        autoplay: true,  
        autoplaySpeed: 2000, 
        dots: false,      
        arrows: false,    
        speed: 500,       
        slidesToShow: 1,  
        slidesToScroll: 1, 
    };

    return (
        <section id="home" className="pt-20 lg:pt-10">
            <div className="container flex flex-col lg:grid lg:grid-cols-2 items-center lg:gap-x-7 lg:gap-y-0">
                
                {/* Image Section (Appears Above Text on Small Screens) */}
                <div className="w-full">
                    {/* Mobile Image */}
                    <div className="block lg:hidden mb-6">
                        <figure className="flex justify-center">
                            <img 
                                src="/img/shravmb.png"  
                                width={400}
                                height={500} 
                                alt="Mobile Image" 
                                className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-auto mx-auto"
                            />
                        </figure>
                    </div>

                    {/* Large Screen Image (Appears on Right) */}
                    <div className="hidden lg:block">
                        <figure>
                            <img 
                                src="/img/portfolio.png"
                                width={656}
                                height={800} 
                                alt="Image" 
                                className="w-full lg:h-auto"
                            />
                        </figure>
                    </div>
                </div>

                {/* Text Section */}
                <div className="text-left">
                    <div className="flex items-center gap-7 text-zinc-700 text-2xl tracking-wide">
                        <span className="relative w-2.5 h-2.5 bg-purple-800 transform rotate-90">
                            <span className="absolute inset-0 bg-white animate-ping transform rotate-90"></span>
                        </span>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl bg-gradient-to-r from-purple-900 to-yellow-500 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradientFlow">
                            <i>Hey!! Thanks for stopping by :))</i>
                        </p>
                    </div>

                    <h2 className="headline-1 max-w-[50ch] sm:max-w-[40ch] lg:max-w-[60ch] mt-5 mb-8 lg:mb-10">
                        Passionate Computer Engineer driven by problem-solving and an innovative mindset.
                    </h2>

                    <div className="flex items-center gap-3">
                        <a className='align-items-center' href="/Shravani_Resume.pdf" download="Shravani_Resume.pdf" >
                            <ButtonPrimary label="Download Resume" icon="download" classes="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
