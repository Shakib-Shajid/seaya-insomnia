import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";


const Slogan = () => {
    return (
        <div className="w-[80%] md:w-full mx-auto font-hankenGrotesk">
            <div className="flex flex-col lg:flex-row gap-2 ">
                <div className="pt-5 mt-3 w-[100%] md:pl-10 lg:pl-20 lg:py-20 space-y-1 md:space-y-5">

                    <h3 className="text-[26px] md:text-3xl lg:text-6xl font-normal w-full  md:mx-auto lg:mx-0 space-y-10">Investing in the future of fashion, we seek out disruptive digital-first brands that are redefining the industry</h3> {/*md:w-10/12 lg:w-2/3*/}

                    {/* <span>&minus;</span>  */}
                    {/* <GoDash className="inline-block text-3xl hover:opacity-0"/> */}
                    <Link href="/impact">
                        <div className="flex gap-2 md:w-10/12 lg:w-full font-light py-7 md:py-10 md:mx-auto ">
                            <div className="flex mt-3 md:mt-0 ">
                                <IoIosArrowRoundForward className="text-3xl " />
                            </div>
                            <p className="text-lg hover:underline"> Discover how we&apos;re shaping the future of digital fashion</p>
                        </div>
                    </Link>
                </div>

                <div className="lg:p-10 flex justify-center items-center text-2xl md:w-[80%] mx-auto lg:w-[50%] lg:border-l-2 lg:border-blue-400 my-3 lg:my-10">
                    <div className="">
                        <div className="text-center">
                            <FaQuoteLeft className="text-5xl " />
                            <span className="inline-flex"> I&apos;m convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance. </span>
                            <p className="text-center mt-2 font-bold">- Steve Jobs</p>
                            <div className="flex justify-end">
                                <FaQuoteRight className="text-5xl font-bold" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Slogan;