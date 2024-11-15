// import React from 'react';

// const FAQ = () => {
//     return (
//         //  
//         <div className='bg-gradient-to-r from-[#614385] to-[#516395] w-[96%] lg:w-[70%] rounded-3xl mx-auto my-10 py-5' data-aos="flip-left">
//             <h3 className='text-3xl md:text-4xl py-5 w-[80%] lg:w-[60%] mx-auto text-white'>Frequently Asked Question</h3>
//             <div className='w-[80%] lg:w-[60%] mx-auto rounded-2xl '>
//                 <div className="collapse collapse-arrow mb-5">
//                     <input type="radio" name="my-accordion-2" />
//                     <div className="collapse-title text-xl font-medium bg-yellow-500">Click to open this one and close others</div>
//                     <div className="collapse-content bg-green-500 text-white">
//                         <p>hello</p>
//                     </div>
//                 </div>
//                 <div className="collapse collapse-arrow mb-5">
//                     <input type="radio" name="my-accordion-2" />
//                     <div className="collapse-title text-xl font-medium bg-yellow-500">Click to open this one and close others</div>
//                     <div className="collapse-content bg-green-500 text-white">
//                         <p>hello</p>
//                     </div>
//                 </div>
//                 <div className="collapse collapse-arrow mb-5">
//                     <input type="radio" name="my-accordion-2" />
//                     <div className="collapse-title text-xl font-medium bg-yellow-500">Click to open this one and close others</div>
//                     <div className="collapse-content bg-green-500 text-white">
//                         <p>hello</p>
//                     </div>
//                 </div>
//                 <div className="collapse collapse-arrow mb-5">
//                     <input type="radio" name="my-accordion-2" />
//                     <div className="collapse-title text-xl font-medium bg-yellow-500">Click to open this one and close others</div>
//                     <div className="collapse-content bg-green-500 text-white">
//                         <p>hello</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FAQ;


// components/Accordion.js
"use client"
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const FAQAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const accordionItems = [
        { title: "Click to open this", content: "Hello, Welcome here" },
        { title: "Click to close others", content: "Hello, Welcome here" },
        { title: "Click one and close others", content: "Hello, Welcome here" },
        { title: "Click to open this one and close others", content: "Hello, Welcome here" },
      ];

    return (
        <div className="space-y-4 w-[80%] mx-auto border-blue-600 border-2 my-10 rounded-3xl p-10">
            <h3 className='text-2xl md:text-4xl font-bold py-5 text-center text-black'>Frequently Asked Question</h3>
            {accordionItems.map((accordionItem, index) => (
                <div key={index} className="border-b-2 border-blue-400 rounded-xl pb-4 md:w-[80%] mx-auto">
                    <button
                        onClick={() => FAQAccordion(index)}
                        className="flex items-center w-full text-left"
                    >
                        <div className="p-2 mr-4 border rounded-full border-blue-500 text-black hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
                            {activeIndex === index ? <FiChevronUp className="text-black text-xl"/> : <FiChevronDown className="text-black text-xl"/>}
                        </div>
                        <span className="text-2xl font-bold">{accordionItem.title}</span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="pl-12 mt-2 text-gray-600">
                            {accordionItem.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
