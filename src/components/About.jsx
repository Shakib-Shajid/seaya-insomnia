import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10 lg:mb-20' data-aos="zoom-in">
            <div className='text-center my-5'>
                <h3 className='text-blue-600 font-bold text-xl'>Who We Are</h3>
                <p className='text-lg max-w-5xl mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odit voluptatibus tempore inventore esse iure exercitationem blanditiis in saepe ab!</p>
            </div>

            <div className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap gap-5">
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl border-2 border-blue-600 flex flex-col h-full" data-aos="flip-left">
                    <figure className="">
                        <Image
                            src="/a_5.gif"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className=" rounded-2xl"
                        />
                    </figure>
                    <div className="card-body flex-grow items-center text-center">
                        <h2 className="card-title">Stage</h2>
                        <p>We invest in pre-seed, we want to be a partner in the first stages of the entrepreneurial journey.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl border-2 border-blue-600 flex flex-col h-full"  data-aos="flip-up">
                    <figure className="">
                        <Image
                            src="/a_4.gif"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className=" rounded-2xl"
                        />
                    </figure>
                    <div className="card-body flex-grow items-center text-center">
                        <h2 className="card-title">Ticket size</h2>
                        <p>Our tickets start at 150 000 € with a follow-on capability of up to 1.5M € in several rounds.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-80  mx-auto shadow-2xl border-2 border-blue-600 flex flex-col h-full"  data-aos="flip-right">
                    <figure className="">
                        <Image
                            src="/a_2.gif"
                            width="1000"
                            height="1000"
                            alt="icon_about_1"
                            className="h-60 rounded-2xl"
                        />
                    </figure>
                    <div className="card-body flex-grow items-center text-center">
                        <h2 className="card-title">Industry</h2>
                        <p>We are proud industry agnostics and we invest in all kinds of verticals.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;