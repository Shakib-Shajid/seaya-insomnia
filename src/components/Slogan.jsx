import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";


const Slogan = () => {
    return (
        <div className="w-[80%] md:w-full mx-auto font-hankenGrotesk">
            <div className="p-2 mt-3 md:p-10 lg:p-20 space-y-1 md:space-y-5">

                <h3 className="text-[26px] md:text-3xl lg:text-6xl font-normal w-full md:w-10/12 lg:w-2/3 md:mx-auto lg:mx-0 space-y-10">Investing in the future of fashion, we seek out disruptive digital-first brands that are redefining the industry</h3>

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
         </div >
    );
};

export default Slogan;