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




// "use client"
import React from 'react';
import Link from 'next/link';
import { IoIosArrowDropdown } from "react-icons/io";
import Image from 'next/image';
const Banner = () => {
    return (
        <div>
            <section className="h-screen text-white relative overflow-hidden">
                {/* <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/dollars.jpg)' }}></div> */}
                <div className="absolute inset-0 bg-black opacity-50"></div>      {/**Dark overlay */}

                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Digital Native Brands</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mb-6">Fashion And Leisure For The Near Future</p>
                    {/* <button className="bg-green-500 text-white py-3 px-6 rounded-full text-lg hover:bg-green-600 transition">Discover More</button> */}

                    <div className="">
                        <Image src="/image.png" width="4000" height="1000" alt="" className="w-40 h-20 md:w-48 md:h-32 lg:w-36 lg:h-16 border-4 border-white" />
                    </div>
                </div>
            </section>



            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 grid">
                <Link href="#slogan">
                    <IoIosArrowDropdown className="text-white text-4xl bounce hover:cursor-pointer" />
                </Link>
            </div>


        </div>
    );
};

export default Banner;