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
                <Image src="/m_logo.png" width="1000" height="1000" alt="" className="w-44 h-24 md:w-64 md:h-32 lg:w-72 lg:h-40 "/>
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
