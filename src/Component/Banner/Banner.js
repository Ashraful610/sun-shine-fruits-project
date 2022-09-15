import React from 'react';
import './Banner.css'
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
    return (
    <div className='w-full h-[513px] md:p-5 p-2 relative'>
          <div className="carousel w-full h-full">
            <div id="slide1" className="carousel-item relative w-full">
                 {/* ------------- banner one ---------------- */}
               <div className='w-full h-full'>
                  {/* ------------ medium device ------------ */}
                    <div className='w-full h-full md:inline-flex hidden backdrop-blur-sm bg-white/20'>
                        {/* --------------- text div -----------*/}
                            <div className='w-2/4 h-full lg:p-7 p-3 flex items-center'>
                                <div>
                                    {/* ----------- title ----------- */}
                                    <h2 className='xl:text-[40px] lg:text-[35px] text-[30px] leading-12 text-white font-semibold font-serif my-5'>
                                        The fruit derived from labor is the sweetest of pleasures. 
                                    </h2>
                                    {/* -------------- text -------------------- */}
                                    <p className='text-white xl:text-lg text-base font-medium my-5 lg:pr-14'>
                                        The fruit derived from labor is theLorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt porro vero similique iusto explicabo!
                                    </p>
                                    {/* -------------- explore button --------------------*/}
                                    <button className="gradient-btn">Explore More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 right-arrow"> 
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* -------------- img div ------------------------------ */}
                            <div className='w-2/4 h-full '>
                                    <img src="https://i.ibb.co/3S1vRsG/optimistic-woman-straw-hat-covers-her-eyes-with-orange-smiles-while-looking-camera-197531-17718.webp" className='h-full w-full object-cover' alt="" />
                            </div>
                    </div>
                    {/* ---------------- small device -------------- */}
                    <div className="hero banner-1 h-full md:hidden " >
                        <div className="hero-overlay bg-opacity-40"></div>
                         <div className='sm:w-3/4  flex flex-col mt-10 items-center px-2'>
                            {/* ------------- title --------------------*/}
                             <h2 className='text-[30px] leading-10 text-white font-semibold font-serif my-5 text-center '>
                                The fruit derived from labor is the sweetest of pleasures. 
                             </h2>
                             {/* ----------- explore button ----------- */}
                             <button className="gradient-btn sm:text-base justify-self-center">
                                Explore More
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 right-arrow"> 
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                              </button>
                         </div>
                   </div> 
               </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle glass md:mt-14 mt-20 hover:ring ring-red-500">❮</a> 
                <a href="#slide2" className="btn btn-circle glass md:mt-14 mt-20 
                hover:ring ring-red-500">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                 {/* ------------- banner two -------------------- */}
                 <div className='w-full h-full'>
                  {/* ------------ medium device ------------ */}
                    <div className='w-full h-full md:inline-flex hidden backdrop-blur-sm bg-white/20'>
                         {/* ------------ img div ------------*/}
                          <div className='w-2/4 h-full '>
                                    <img src="https://i.ibb.co/z5qRjt8/56545421-boy-girl-and-baby-with-variety-of-fruit-and-vegetable-colorful-rainbow-of-raw-fruits-and-ve.webp" className='h-full w-full object-cover' alt="" />
                            </div>
                            {/* -------------- text div ------------------------------ */}
                          <div className='w-2/4 h-full lg:p-7 p-3 flex items-center'>
                                <div>
                                    {/* ------------title -------------- */}
                                    <h2 className='xl:text-[40px] lg:text-[35px] text-[30px] leading-12 text-white font-semibold font-serif my-5'>
                                    Good thoughts bear good fruit, bad thoughts bear bad fruit.
                                    </h2>
                                    {/* ------------- text -------------------- */}
                                    <p className='text-white xl:text-lg text-base font-medium my-5 lg:pr-14'>
                                        The fruit derived from labor is theLorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt porro vero similique iusto explicabo!
                                    </p>
                                    {/* ------------- explore button --------------------*/}
                                    <button className="gradient-btn xl:text-xl lg:text-lg">Explore More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 right-arrow"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                           </div>                           
                    </div>
                    {/* ---------------- small device -------------- */}
                    <div className="hero banner-2 h-full md:hidden " >
                        <div className="hero-overlay bg-opacity-40"></div>
                         <div className='sm:w-3/4  flex flex-col mt-10 items-center px-2'>
                            {/* ------------- title --------------------*/}
                             <h2 className='text-[30px] leading-10 text-white font-semibold font-serif my-5 text-center '>
                             Good thoughts bear good fruit, bad thoughts bear bad fruit. 
                             </h2>
                             {/* ------------- explore button ---------*/}
                             <button className="gradient-btn sm:text-base justify-self-center">
                                Explore More
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 right-arrow"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                  </svg>
                              </button>
                         </div>
                   </div> 
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle glass md:mt-14 mt-20 hover:ring ring-red-500">❮</a> 
                <a href="#slide3" className="btn btn-circle glass md:mt-14 mt-20 hover:ring ring-red-500">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                {/* --------------- banner three -------------------- */}
                 <div className='w-full h-full'>
                  {/* ------------ medium device ------------ */}
                    <div className='w-full h-full md:inline-flex hidden backdrop-blur-sm bg-white/20'>
                          {/* -------------- text div -------------------- */}
                            <div className='w-2/4 h-full lg:p-7 p-3 flex items-center'>
                                <div>
                                    {/* ----------- title ----------- */}
                                    <h2 className='xl:text-[40px] lg:text-[35px] text-[30px] leading-12 text-white font-semibold font-serif my-5'>
                                    Life isn't about finding yourself. Life is about creating yourself. 
                                    </h2>
                                    {/* ----------- text  */}
                                    <p className='text-white xl:text-lg text-base font-medium my-5 lg:pr-14'>
                                        The fruit derived from labor is theLorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt porro vero similique iusto explicabo!
                                    </p>
                                    {/* ------------ explore button --------------------*/}
                                    <button className="gradient-btn">Explore More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 right-arrow"> 
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* ------------- img div --------------------*/}
                            <div className='w-2/4 h-full '>
                                    <img src="https://i.ibb.co/0Qbwzmn/portrait-young-woman-with-fruits-vegetables-23-2149384018.webp" className='h-full w-full object-cover' alt="" />
                            </div>
                    </div>
                    {/* ---------------- small device -------------- */}
                    <div className="hero banner-3 h-full md:hidden " >
                        <div className="hero-overlay bg-opacity-40"></div>
                         <div className='sm:w-3/4  flex flex-col mt-10 items-center px-2'>
                            {/* -------------- title ----------------*/}
                             <h2 className='text-[30px] leading-10 text-white font-semibold font-serif my-5 text-center '>
                             Life isn't about finding yourself. Life is about creating yourself.
                             </h2>
                             {/* ------------- button --------- */}
                             <button className="gradient-btn sm:text-base justify-self-center">
                                Explore More
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 right-arrow"> 
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                              </button>
                         </div>
                   </div> 
                 </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle glass md:mt-14 mt-20 hover:ring ring-red-500">❮</a> 
                <a href="#slide4" className="btn btn-circle glass md:mt-14 mt-20 hover:ring ring-red-500">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                {/* ---------------- banner four ---------- */}
                <div className='w-full h-full'>
                  {/* ------------ medium device ------------ */}
                    <div className='w-full h-full md:inline-flex hidden backdrop-blur-sm bg-white/20'>
                           {/* ------------ img div -------------------- */}
                            <div className='w-2/4 h-full '>
                                    <img src="https://i.ibb.co/vmLLbyv/360-F-155993881-phy-Am-Cb-KIOw-TN7-U3o-Mlhf-Hll-POpw-VNv-A.jpg" className='h-full w-full object-cover' alt="" />
                            </div>
                            {/* ----------- text div ----------- */}
                            <div className='w-2/4 h-full lg:p-7 p-3 flex items-center'>
                                <div>
                                    {/* -------- title --------*/}
                                    <h2 className='xl:text-[40px] lg:text-[35px] text-[30px] leading-12 text-white font-semibold font-serif my-5'>
                                    Life is really simple, but we insist on making it complicated.
                                    </h2>
                                    {/* --------------- text -------------------------------*/}
                                    <p className='text-white xl:text-lg text-base font-medium my-5 lg:pr-14'>
                                        The fruit derived from labor is theLorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt porro vero similique iusto explicabo!
                                    </p>
                                    {/* ------------- explore button --------------------*/}
                                    <button className="gradient-btn xl:text-xl lg:text-lg">Explore More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 right-arrow"> 
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                    </div>
                    {/* ---------------- small device -------------- */}
                    <div className="hero banner-4 h-full md:hidden " >
                        <div className="hero-overlay bg-opacity-40"></div>
                        {/* -------------- text div ------------------------------ */}
                         <div className='sm:w-3/4  flex flex-col mt-10 items-center px-2'>
                             <h2 className='text-[30px] leading-10 text-white font-semibold font-serif my-5 text-center '>
                             Life is really simple, but we insist on making it complicated. 
                             </h2>
                             <button className="gradient-btn sm:text-base justify-self-center">
                                Explore More
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 right-arrow"> 
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                 </svg>
                              </button>
                         </div>
                   </div> 
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle glass md:mt-14 mt-20 hover:ring ring-red-500">❮</a> 
                <a href="#slide1" className="btn btn-circle glass md:mt-14 mt-20 hover:ring ring-red-500">❯</a>
                </div>
            </div>
         </div>
         
     </div>
    );
};
export default Banner;