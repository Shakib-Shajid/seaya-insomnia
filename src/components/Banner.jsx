// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { IoIosArrowDropdown } from "react-icons/io";

// const Banner = () => {
//     return (
//         <div className='relative w-full h-[420px] md:h-screen'>
//             <video
//                 src="/insomnia_lab_video.mp4"
//                 loop
//                 muted
//                 autoPlay
//                 playsInline
//                 className='w-full h-full object-cover'
//             />
//             {/* Centered Image */}
// <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//     <Image src="/image.png" width="4000" height="1000" alt="" className="w-40 h-20 md:w-48 md:h-32 lg:w-48 lg:h-20 border-4 border-white"/>
// </div>
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:grid">
//                   <Link href="#slogan">
//                        <IoIosArrowDropdown className="text-white text-4xl bounce hover:cursor-pointer" />
//                   </Link>
//              </div>

//          </div>
//     );
// };

// export default Banner;




"use client"
import React from 'react';
import Link from 'next/link';
import { IoIosArrowDropdown } from "react-icons/io";
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <section className="h-screen text-white relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-gradient-to-r from-purple-500 to-blue-600"></div>

                {/* SVG Wave positioned in the center */}
                <div className="absolute inset-0 flex justify-center items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,32L60,69.3C120,107,240,181,360,192C480,203,600,149,720,138.7C840,128,960,160,1080,192C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>              


                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content container */}
                <div className="relative h-[80%] flex flex-col justify-center items-center text-center px-4 space-y-6">
                    {/* Logo - Larger than text */}
                    <div className="pb-10">
                        <Image src="/w_icon.png" width="4000" height="1000" alt="" className="w-52 h-24 md:w-64 md:h-28 lg:w-56 lg:h-32 border-2 border-white pt-2" />
                    </div>

                    {/* Text - Positioned lower and slightly smaller than the image */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Digital Native Brands</h1>
                        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-6">Fashion and leisure for the near future</p>
                    </div>
                </div>
            </section>

            {/* Down Arrow Icon */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 grid">
                    <Link href="#slogan" scroll={true} onClick={(e) => {
                        e.preventDefault(); // Prevent the default scroll behavior
                        const target = document.getElementById('slogan');
                        if (target) {
                            window.scrollTo({
                                top: target.offsetTop - 100, // Adjust -50 to control the offset from the top
                                behavior: 'smooth', // Smooth scroll
                            });
                        }
                    }}>
                        <IoIosArrowDropdown className="text-white text-4xl bounce hover:cursor-pointer" />
                    </Link>
                </div>
            
        </div>
    );
};

export default Banner;

