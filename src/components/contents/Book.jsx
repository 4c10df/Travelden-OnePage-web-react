import Line from './images/Line pattern.png';
import Container from './images/Container.png';
import './styles/_books.css';


function Book() {
    return (
        <section className="flex justify-center items-center mt-[50px] w-full">
            <div className="flex justify-center items-center m-auto px-[15px] w-full xl:w-[1280px] at500:px-[20px] md:px-[30px]">

                <div className="flex justify-center items-center w-full h-auto  mx-auto bg-[#F5811E] rounded-xl shadow-md overflow-hidden ">

                    <div className="flex flex-col md:flex-row w-full silver:p-[50px]">

                        <div className="flex flex-col justify-start items-start p-8 relative text-left">
                            <div className=" w-[291px] pb-5 tracking-wide text-[33px] md:text-[43.5px] text-white font-Metropolis font-bold leading-[53.167px]">
                                Book your 
                                <br />
                                flights now
                            </div>
                            <p className="mb-4 text-white w-full sm:w-[424px] text-[18px] lg:text-[20px] leading-[25px] font-bold font-Metropolis">
                                Reach us directly on WhatsApp for amazing deals and discounts
                            </p>
                            <div className="flex flex-col at500:flex-row items-center gap-5 mb-[20px] w-full">
                                <a href="#" className="w-full sm:w-[168.009px]">
                                    <button className="cusy block mt-[1px] text-lg leading-tight font-medium text-black">Get started</button>
                                </a>
                                <a href="http://wa.me/message/S6EJ6JIZTGGFM1" className="w-full sm:w-[168.009px]">
                                    <button className="eilte block mt-1 text-lg leading-tight font-medium text-black">WhatsApp</button>
                                </a>
                            </div>
                        </div>

                        <div className="relative w-full h-auto flex ">
                            <img className="hidden silver:block object-cover silver:absolute bottom-0 xl:h-[360.458px]" src={Line} alt="Modern building architecture" />
                            <img className="block object-cover silver:absolute bottom-[-100px] right-[-100px] silver:w-[608.315px] w-full h-auto" src={Container} alt="Container" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Book;
