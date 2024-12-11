/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/shravani-05'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shravanisawant/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/shravani0507'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/shravaniii.05/'
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/shravaniii05/'
    }
  ];
import React from 'react'
import { ButtonPrimary } from './Button';
const Footer = () => {
  return (
    <footer className="section">
        <br /><br /><br /><br />
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">

                <div className="">
                    <h2 className="headline-1 mb-8 lg:max-w-[30ch]">
                        Lets Collaborate and work together!!!
                    </h2>
                    <ButtonPrimary
                        href="mailto:shravanisawant.work@gmail.com"
                        label='Start Project'
                    />
                </div>


                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">Portfolio</p>

                            <ul>
                                {sitemap.map(({label, href},key)=>
                                (
                                    <li key={key}>
                                           <a 
                                           href={href} 
                                           className="block text-sm text-zinc-50
                                           py-1 transition-colors hover:text-zinc-500"
                                           >
                                            {label}
                                            </a> 
                                    </li>
                                ))}
                            </ul>
                    </div>   
                    
                    <div>
                        <p className="mb-2">Socials</p>

                            <ul>
                                {socials.map(({label, href},key)=>
                                (
                                    <li key={key}>
                                           <a 
                                           href={href} 
                                           className="block text-sm text-zinc-50
                                           py-1 transition-colors hover:text-zinc-500"
                                           >
                                            {label}
                                            </a> 
                                    </li>
                                ))}
                            </ul>
                    </div> 
                    

                </div>  
            </div>

         </div><br /><br />
         <div className=" ">
                <p className="bg-zinc-800 h-10 text-zinc-500 text-15 text-center pt-2">
                    Copyrights &copy; 2024 <span>shravanisawant</span>
                </p>
            </div>    
    </footer>
  )
}

export default Footer