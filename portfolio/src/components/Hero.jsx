/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

/***
 * components
 */

import { ButtonPrimary } from './Button';
import React from 'react'

const Hero = () => {
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
        <p className="text-2xl font-mono overflow-hidden whitespace-nowrap border-r-2 border-black animate-typewriter">Hey!! Thanks for stopping by!!</p>
    </div>
   <h2 className='headline-1 max-w-[50ch] sm:max-w-[40ch] lg:max-w-[60ch] mt-5 mb-8 lg:mb-10 te'>
    Passionate Computer Engineer with a Passionate for 
    Problem-Solving and a Mindset for Innovation.
    </h2>
    <div className="flex items-center gap-3">
    <ButtonPrimary 
        label="Download CV"
        icon="download"
        classes=""
    />
    
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
    </div>

    </section>
    
    
    
  )
}

export default Hero