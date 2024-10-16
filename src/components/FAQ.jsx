import React from 'react';

const FAQ = () => {
    return (
        //  
        <div className='bg-gradient-to-r from-[#614385] to-[#516395] w-[96%] lg:w-[70%] rounded-3xl mx-auto my-10 py-5' data-aos="flip-left">
            <h3 className='text-3xl md:text-4xl py-5 w-[80%] lg:w-[60%] mx-auto text-white'>Frequently Asked Question</h3>
            <div className='w-[80%] lg:w-[60%] mx-auto rounded-2xl '>
                <div className="collapse collapse-arrow mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium bg-yellow-500">Click to open this one and close others</div>
                    <div className="collapse-content bg-green-500 text-white">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium bg-yellow-500">Click to open this one and close others</div>
                    <div className="collapse-content bg-green-500 text-white">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium bg-yellow-500">Click to open this one and close others</div>
                    <div className="collapse-content bg-green-500 text-white">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium bg-yellow-500">Click to open this one and close others</div>
                    <div className="collapse-content bg-green-500 text-white">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;