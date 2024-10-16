import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const Banner = () => {
    return (
        <div className='relative w-full h-[420px] md:h-screen'>
            <video
                src="/insomnia_lab_video.mp4"
                loop
                muted
                autoPlay
                playsInline
                className='w-full h-full object-cover'
            />
            {/* Centered Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src="/image.png" width="1500" height="1500" alt="" className="w-40 h-20 md:w-48 md:h-32 lg:w-48 lg:h-20 border-4 border-white"/>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:grid">
                <Link href="#slogan">
                    <IoIosArrowDropdown className="text-white text-4xl bounce hover:cursor-pointer" />
                </Link>
            </div>
        </div>
    );
};

export default Banner;
