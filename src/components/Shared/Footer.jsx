// import Link from 'next/link';
// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className=" bg-[#363A3A] text-neutral-content md:p-14 font-hankenGrotesk">
//             <div className='w-[80%] mx-auto md:w-full lg:w-10/12 footer text-xl flex flex-col lg:grid lg:grid-cols-3 gap-2'>
//                 <nav className='mx-auto md:mx-0'>
//                     <h6 className="text-3xl text-white my-5 mx-auto md:mx-0">Navigate</h6>
//                     <Link href="/ventures" className="link link-hover mx-auto md:mx-0">Seaya Ventures</Link>
//                     <Link href="/andromeda" className="link link-hover mx-auto md:mx-0">Seaya Andromeda</Link>
//                     <Link href="/cathay-latam" className="link link-hover mx-auto md:mx-0">Seaya Cathay Latam</Link>
//                     <Link href="/portfolio" className="link link-hover mx-auto md:mx-0">Portfolio</Link>
//                     <Link href="/team" className="link link-hover mx-auto md:mx-0">Team</Link>
//                 </nav>

//                 <nav className='mt-20 lg:-ml-20 mx-auto md:mx-0'>
// <Link href="/impact" className="link link-hover mx-auto md:mx-0">ESG/Impact</Link>
// <Link href="/news" className="link link-hover mx-auto md:mx-0">News</Link>
// <Link href="" className="link link-hover mx-auto md:mx-0">Talent</Link>
// <Link href="/investor" className="link link-hover mx-auto md:mx-0">Investor Area</Link>
// <Link href="/contact" className="link link-hover mx-auto md:mx-0">Contact</Link>
// <Link href="/channel" className="link link-hover mx-auto md:mx-0">Whistleblower Channel</Link>
//                 </nav>

//                 <nav className='w-full lg:w-[650px] relative  mx-auto lg:-ml-32 grid grid-cols-1 my-5'>
//                     <label htmlFor="" className='text-3xl mx-auto md:mx-0'>Join our newsletter</label>
//                     <input type="email" name="" className='w-[94%] mx-auto md:w-full form-control p-2' placeholder='Enter your email address' />

//                     <div className='text-lg lg:ml-4'>
//                         <div className='flex justify-start gap-3 mt-4 '>
//                             <input type="checkbox" className="bg-white checkbox" />
//                             <p className='text-center md:text-start'>I have read and accept the Privacy Policy and Legal Notice of this Website.</p>
//                         </div>

//                         <div className='flex justify-center gap-3 mt-4'>
//                             <input type="checkbox" className="bg-white checkbox" />
//                             <p className='text-center md:text-start'>I expressly request that you send me commercial communications by electronic means.</p>
//                         </div>

//                     </div>

//                     <p className='text-sm p-2 text-center md:text-start'>The personal data collected through this form will be processed by Seaya Capital Gestión SGEIC, S.A. with an address at C/ Alcalá 54, 28014 Madrid, based on your query and in order to provide you with a response. If you wish to exercise your rights of access, rectification, deletion, opposition, portability, limitation of processing, or those recognized by the regulations at any time, you can request it to the Data Protection Delegate at: lopd@seaya.vc.You can find complete information about the treatment of the data in https://seaya.vc/privacy-policy/﻿</p>

//                     <button className='mx-auto md:mx-0 m-2 btn bg-black text-white border-none'>Submit</button>
//                 </nav>

//             </div>

//             <div className=" lg:navbar border-t-2 p-4 text-center md:text-start">
//                 <div className="flex-1">
//                     <a className="btn btn-ghost text-sm lg:text-xl">© 2024 Seaya · Designed by WSC</a>
//                 </div>
// <div className="flex-none">
//     <ul className="menu menu-horizontal px-1 text-lg flex flex-col items-center lg:flex-row ">
//         <li> <Link href="/legal-notice" className="relative flex items-center group">
//             {/* Static Text */}
//             <span className="relative">
//                 Legal Notice

//                 {/* Underline that animates when hovered */}
//                 <span
//                     className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
//                 ></span>
//             </span>
//         </Link></li>
//         <li> <Link href="/privacy-policy" className="relative flex items-center group">
//             {/* Static Text */}
//             <span className="relative">
//                 Privacy policy

//                 {/* Underline that animates when hovered */}
//                 <span
//                     className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
//                 ></span>
//             </span>
//         </Link></li>
//         <li> <Link href="/cookie-policy" className="relative flex items-center group">
//             {/* Static Text */}
//             <span className="relative">
//                 Cookie policy

//                 {/* Underline that animates when hovered */}
//                 <span
//                     className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0 group-hover:origin-right`}
//                 ></span>
//             </span>
//         </Link></li>

//         {/* <li><Link href="/legal-notice">Legal Notice</Link></li>
//         <li><Link href="/privacy-policy">Privacy policy</Link></li>
//         <li><Link href="/cookie-policy">Cookie policy</Link></li> */}

//     </ul>
// </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;




// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="footer bg-base-200 text-base-content p-10 border-t-2 border-black">
//             <aside className='md:max-w-7xl md:mx-auto'>
//                 {/* <svg
//                     width="50"
//                     height="50"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     className="fill-current">
//                     <path
//                         d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//                 </svg> */}
//                 <Image src="/c_logo.png" width="200" height="200" alt="" className='h-20 w-36'/>
//                 <p>
//                     Insomnia Labs
//                     <br />
//                     Providing reliable tech since 1992
//                 </p>
//             </aside>
//             <nav className='md:max-w-7xl md:mx-auto'>
//                 <h6 className="footer-title">Navigate</h6>
//                 <Link href="/ventures" className="link link-hover ">Seaya Ventures</Link>
//                 <Link href="/andromeda" className="link link-hover ">Seaya Andromeda</Link>
//                 <Link href="/cathay-latam" className="link link-hover ">Seaya Cathay Latam</Link>
//                 <Link href="/portfolio" className="link link-hover ">Portfolio</Link>
//                 <Link href="/team" className="link link-hover ">Team</Link>
//             </nav>
//             <nav className='md:max-w-7xl md:mx-auto'>
//                 <Link href="/impact" className="link link-hover ">ESG/Impact</Link>
//                 <Link href="/news" className="link link-hover ">News</Link>
//                 <Link href="" className="link link-hover ">Talent</Link>
//                 <Link href="/investor" className="link link-hover ">Investor Area</Link>
//                 <Link href="/contact" className="link link-hover ">Contact</Link>
//                 <Link href="/channel" className="link link-hover ">Whistleblower Channel</Link>
//             </nav>
//             <nav className='md:max-w-7xl md:mx-auto'>
//                 <h6 className="footer-title">Legal</h6>
//                 <Link href="/legal-notice" className='link-hover'>Legal Notice</Link>
//                 <Link href="/privacy-policy" className='link-hover'>Privacy policy</Link>
//                 <Link href="/cookie-policy" className='link-hover'>Cookie policy</Link>
//             </nav>
//         </footer>
//     );
// };

// export default Footer;

// import Image from 'next/image';
// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="footer bg-neutral text-neutral-content p-10">
//             <aside className='md:max-w-7xl md:mx-auto'>
//                 <Image src="/fimage.png" width="200" height="200" alt="" />
//                 <p>
//                     Insomnia lab
//                     <br />
//                     Providing reliable tech since 1992
//                 </p>
//             </aside>
//             <nav className='md:max-w-7xl md:mx-auto'>
//                 <h6 className="footer-title">Navigate</h6>
//                 <a className="">Branding</a>
//                 <a className="">Advertisement</a>
//                 <a className="">Portfolio</a>
//                 <a className="">Team</a>
//             </nav>
//             <nav className='md:max-w-7xl md:mx-auto'>
//                 <h6 className="footer-title">Company</h6>
//                 <a className="">News</a>
//                 <a className="">Investor Area</a>
//                 <a className="">Contact</a>
//                 <a className="">Whistleblower Channel</a>
//             </nav>
//             <nav className='md:max-w-7xl md:mx-auto'>
//                 <h6 className="footer-title">Legal</h6>
//                 <a className="">Terms of use</a>
//                 <a className="">Privacy policy</a>
//                 <a className="">Cookie policy</a>
//             </nav>
//         </footer>
//     );
// };

// export default Footer;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
            <footer className="footer justify-center md:justify-around lg:justify-between items-center p-4 max-w-7xl mx-auto ">
                <aside className="grid-flow-col items-center">
                <Image src="/fimage.png" width="100" height="100" alt="" />
                    {/* <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg> */}
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 place-self-center md:place-self-center md:justify-self-end">
                    <Link href="https://www.linkedin.com/company/insomnialab/" target="_blank"><FaLinkedinIn  className='text-2xl'/></Link>
                    <FaXTwitter  className='text-2xl'/>
                    <FaYoutube  className='text-2xl'/>
                    <FaFacebookF  className='text-2xl'/>
                    
                </nav>
            </footer>
        </div>
    );
};

export default Footer;