import Link from 'next/link';
import React from 'react';
// import { LuMouse } from "react-icons/lu";
import { IoIosArrowDropdown } from "react-icons/io";


const Banner = () => {
    return (
        <div className='relative w-full h-[420px] md:h-screen'>
            <video
                // src="https://cdn-628fa384c1ac183cb034ddea.closte.com/wp-content/uploads/2022/10/Seaya_Portada_NewVideo_low2.mp4"
                src="/insomnia_lab_video.mp4"
                loop
                muted
                autoPlay
                playsInline
                className='w-full h-full object-cover'
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:grid">
                {/* <LuMouse className="text-white text-4xl bounce hover:cursor-pointer" /> */}
                <Link href="#slogan"><IoIosArrowDropdown className="text-white text-4xl bounce hover:cursor-pointer" /></Link>

            </div>
        </div>
    );
};

export default Banner;
