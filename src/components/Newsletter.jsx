import React from 'react';

const Newsletter = () => {
    return (
        <div className="text-center relative mx-auto bg-blue-400 text-white md:rounded-3xl p-5 lg:p-10 md:w-[90%] lg:w-[70%] my-10" data-aos="zoom-in">
            <h5 className="text-lg lg:text-xl">Join Our Community</h5>
            <h2 className="text-xl md:text-3xl font-bold">Subscribe To Our Newsletter</h2>
            <p className="mt-4 text-base">
                But I must explain to you how all this mistaken idea of denouncing <br />
                pleasure and praising pain was born
            </p>

            <div className='w-full md:w-[80%] mx-auto'> 
                <input
                    type="email"
                    className="text-white bg-transparent border border-white rounded-full mt-6 p-6 focus:outline-none  placeholder-white w-full lg:w-full"
                    placeholder="Enter Your Email Address"
                />

                <button className="btn bg-[#90EE90] hover:bg-[#90EE90] border-none rounded-full text-white btn-lg lg:absolute lg:bottom-[2.8rem] w-full lg:w-40
                 mt-5 lg:right-[7rem] xl:right-[8rem] 2xl:right-[9rem] custom-1600:right-[9.5rem]">
                    Get Started
                </button>
            </div>
        </div>

    );
};

export default Newsletter;