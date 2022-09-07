import React from 'react';
import './Items.css'

const Items = () => {
    return (
        <div className='w-full min-h-screen py-8 px-3  bg-gradient-to-r from-yellow-400 to-rose-600'>
            <h2 className='text-5xl text-center text-white font-semibold font-serif'>Our
               <span className='text-yellow-300'> Fruits </span>
             </h2>
            <div className="w-full h-full md:px-5 py-10 grid sm:grid-cols-2 gap-5">
                {/* --------- card One */}
                 <div className="w-full lg:h-full md:h-3/4 sm:h-full h-full  lg:flex shadow-2xl rounded-2xl overflow-hidden">
                    {/* ----------- img div ----------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4">
                       <img src="https://placeimg.com/300/400/arch" className='h-full w-full' alt="Album"/>
                    </div>
                    {/* ------------ details div -------------------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4 xl:p-5 px-5 py-3 relative">
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Name : </span> Mango 
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Price : </span> $50
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Quantity : </span> 120
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Supplier : </span> Madura 
                        </h2>
                        <p className='text-lg text-white xl:my-2 leading-6 sm:block '>
                           <span className='font-semibold text-xl'> Description : </span>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium optio voluptatem quas quod . 
                        </p>
                        <button className="btn absolute xl:bottom-5 bottom-3 right-5 left-5 bg-gradient-to-r from-rose-600 to-yellow-400 border-0 shadow-xl">        
                            Update now
                        </button>
                    </div>
                 </div>
                 {/* ---------- card two ----------- */}
                 <div className="w-full lg:h-full md:h-3/4 sm:h-full h-full  lg:flex shadow-2xl rounded-2xl overflow-hidden">
                    {/* ----------- img div ----------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4">
                       <img src="https://placeimg.com/300/400/arch" className='h-full w-full' alt="Album"/>
                    </div>
                    {/* ------------ details div -------------------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4 xl:p-5 px-5 py-3 relative">
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Name : </span> Mango 
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Price : </span> $50
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Quantity : </span> 120
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Supplier : </span> Madura 
                        </h2>
                        <p className='text-lg text-white xl:my-2 leading-6 sm:block '>
                           <span className='font-semibold text-xl'> Description : </span>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium optio voluptatem quas quod . 
                        </p>
                        <button className="btn absolute xl:bottom-5 bottom-3 right-5 left-5 bg-gradient-to-r from-rose-600 to-yellow-400 border-0 shadow-xl">        
                            Update now
                        </button>
                    </div>
                 </div>
                  {/* ---------- card three ----------- */}
                 <div className="w-full lg:h-full md:h-3/4 sm:h-full h-full  lg:flex  rounded-2xl overflow-hidden">
                    {/* ----------- img div ----------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4">
                       <img src="https://placeimg.com/300/400/arch" className='h-full w-full' alt="Album"/>
                    </div>
                    {/* ------------ details div -------------------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4 xl:p-5 px-5 py-3 relative">
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Name : </span> Mango 
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Price : </span> $50
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Quantity : </span> 120
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Supplier : </span> Madura 
                        </h2>
                        <p className='text-lg text-white xl:my-2 leading-6 sm:block '>
                           <span className='font-semibold text-xl'> Description : </span>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium optio voluptatem quas quod . 
                        </p>
                        <button className="btn absolute xl:bottom-5 bottom-3 right-5 left-5 bg-gradient-to-r from-rose-600 to-yellow-400 border-0 shadow-xl">        
                            Update now
                        </button>
                    </div>
                 </div>
                  {/* ---------- card four ----------- */}
                 <div className="w-full lg:h-full md:h-3/4 sm:h-full h-full  lg:flex  rounded-2xl overflow-hidden">
                    {/* ----------- img div ----------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4">
                       <img src="https://placeimg.com/300/400/arch" className='h-full w-full' alt="Album"/>
                    </div>
                    {/* ------------ details div -------------------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4 xl:p-5 px-5 py-3 relative">
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Name : </span> Mango 
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Price : </span> $50
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Quantity : </span> 120
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Supplier : </span> Madura 
                        </h2>
                        <p className='text-lg text-white xl:my-2 leading-6 sm:block '>
                           <span className='font-semibold text-xl'> Description : </span>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium optio voluptatem quas quod . 
                        </p>
                        <button className="btn absolute xl:bottom-5 bottom-3 right-5 left-5 bg-gradient-to-r from-rose-600 to-yellow-400 border-0 shadow-xl">        
                            Update now
                        </button>
                    </div>
                 </div>
                  {/* ---------- card five ----------- */}
                 <div className="w-full lg:h-full md:h-3/4 sm:h-full h-full  lg:flex shadow-2xl rounded-2xl overflow-hidden">
                    {/* ----------- img div ----------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4">
                       <img src="https://placeimg.com/300/400/arch" className='h-full w-full' alt="Album"/>
                    </div>
                    {/* ------------ details div -------------------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4 xl:p-5 px-5 py-3 relative">
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Name : </span> Mango 
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Price : </span> $50
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Quantity : </span> 120
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Supplier : </span> Madura 
                        </h2>
                        <p className='text-lg text-white xl:my-2 leading-6 sm:block '>
                           <span className='font-semibold text-xl'> Description : </span>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium optio voluptatem quas quod . 
                        </p>
                        <button className="btn absolute xl:bottom-5 bottom-3 right-5 left-5 bg-gradient-to-r from-rose-600 to-yellow-400 border-0 shadow-xl">        
                            Update now
                        </button>
                    </div>
                 </div>
                  {/* ---------- card six ----------- */}
                 <div className="w-full lg:h-full md:h-3/4 sm:h-full h-full  lg:flex shadow-2xl rounded-2xl overflow-hidden">
                    {/* ----------- img div ----------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4">
                       <img src="https://placeimg.com/300/400/arch" className='h-full w-full' alt="Album"/>
                    </div>
                    {/* ------------ details div -------------------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4 xl:p-5 px-5 py-3 relative">
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Name : </span> Mango 
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Price : </span> $50
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Quantity : </span> 120
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Supplier : </span> Madura 
                        </h2>
                        <p className='text-lg text-white xl:my-2 leading-6 sm:block '>
                           <span className='font-semibold text-xl'> Description : </span>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium optio voluptatem quas quod . 
                        </p>
                        <button className="btn absolute xl:bottom-5 bottom-3 right-5 left-5 bg-gradient-to-r from-rose-600 to-yellow-400 border-0 shadow-xl">        
                            Update now
                        </button>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Items;