import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({fruit}) => {
    const {_id, name , price , quantity , description , img , suplier} = fruit

    return (
        <div className="w-full lg:h-[320px] h-full lg:flex shadow-2xl rounded-2xl ">
                    {/* ----------- img div ----------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4 ">
                       <img src={img} className='h-full w-full' alt="Album"/>
                    </div>
                    {/* ------------ details div -------------------- */}
                    <div className="lg:w-2/4 w-full lg:h-full h-2/4 xl:p-5 px-5 py-3 relative">
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Name : </span> {name} 
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                           <span className='font-semibold text-xl'> Price : </span> ${price}
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Quantity : </span> {quantity}
                        </h2>
                        <h2 className='text-lg text-white xl:my-2 '>
                          <span className='font-semibold text-xl'> Supplier : </span> {suplier} 
                        </h2>
                        <p className='text-lg text-white xl:my-2 leading-6 lg:block hidden'>
                           <span className='font-semibold text-xl'> Description : </span>
                           {description}
                        </p>
                        <div className='flex justify-center'>
                            <button className="w-3/4  gradient-btn">        
                                <Link to={`/itemDetails/${_id}`}>
                                Update Now
                                </Link>
                            </button>
                        </div>                      
                    </div>
         </div>
    );
};

export default Item;