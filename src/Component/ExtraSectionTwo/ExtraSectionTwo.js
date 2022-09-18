import React from 'react';

const ExtraSectionTwo = () => {
    const rating = <>
         <div className="rating rating-md">
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-500" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-500" 
              />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-500" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-500" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-500" />
       </div>
    </>
    return (
        <main className="w-full lg:h-screen md:h-[600px] h-fit sm:px-10 sm:pb-10 md:px-8 p-5 ">
            <div className="sm:p-5 p-0">
                <h1 className="sm:text-5xl text-4xl text-white text-center font-semibold"> 
                Our<span className='text-yellow-300'> Customers Review </span>
                </h1>
            </div>
            {/* -------- review section --------------------*/}
            <section className="w-full md:h-4/5 h-full flex items-center">
                <div className="w-full  md:h-3/4  lg:p-5 md:py-0 py-5 grid md:grid-cols-3 gap-5">
                        {/* ----------- review one --------------------*/}
                    <div className=" text-white  backdrop-blur-sm bg-white/30">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center p-4 ">
                            <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/ellipse-1-1-1643077562718.png?v=1643077563" alt="" />
                        </div>
                        {/* ------- review text -----------*/}
                        <div className="content-text text-center  px-2">
                            <p className="py-2">Like the products since the first try and now I’m a loyal customer. The material for the backpack here is super durable, and its waterproof ability makes me no longer worry about the rainy season.</p>
                            <div>
                                {rating}
                                <h3 className="font-semibold py-2 font-serif text-yellow-200">Paula Wilson</h3>
                            </div>
                        </div>
                    </div>
                        {/* ----------- review two --------------------*/}
                    <div className=" text-white  backdrop-blur-sm bg-white/30 ">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center py-4 ">
                            <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/ellipse-1-2-1643077562727.png?v=1643077569" alt=""/>
                        </div>
                        {/* ------- review text -----------*/}
                        <div className="content-text text-center px-2">
                            <p className="py-2">Great service and quick delivery! Got my travel bag just after 3 days of order, and the special design is a plus point. Now I can travel in my own style!.</p>
                            <div className="">
                                {
                                    rating
                                }
                                <h3 className="font-semibold py-2 font-serif text-yellow-200">Kim Westlock</h3>
                            </div>
                            
                        </div>
                    </div>
                    {/* ----------- review three --------------------*/}
                    <div className=" text-white  backdrop-blur-sm bg-white/30">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center py-4 ">
                            <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/ellipse-1-3-1643077562730.png?v=1643077574" alt=""/>
                        </div>
                        {/* ------- review text -----------*/}
                        <div className="content-text text-center px-2">
                            <p className="py-2">Not really sure if the product meets my needs at first, but after seeing my friend’s hip back on , I have no other doubts and need to buy myself one at once. Cannot deny this convenience!</p>
                            <div>
                                { rating}
                                <h3 className="font-semibold py-2 font-serif text-yellow-200">Anna Wilson</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
       </main>
    );
};

export default ExtraSectionTwo;