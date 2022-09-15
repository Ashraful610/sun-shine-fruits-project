import React, { useState } from 'react';

const ItemDetails = () => {
    let [number , setNumber] = useState(0)
    const [increaseNum , setIncreaseNum] = useState(0)
    const handleDecrease = event => {
        event.preventDefault();
        if(number > 0) {
        number--;
        }
    }

    const handleIncrease = event => {
        const number = event.target.value
        if(number > 0) {
            console.log(number)
        }
    }

    const handleQuantity = event => {
        event.preventDefault();
        console.log(increaseNum);
    }
    return (
        <div className='min-h-[500px] sm:h-[550px] h-fit md:p-5 p-2'>
            <div className='backdrop-blur-sm bg-white/30 w-full h-full sm:flex'>
                <div className="sm:w-2/4 h-full">
                   <img src="https://placeimg.com/192/192/people" alt='' className='w-full h-full'/>
                </div>
               <div className='sm:w-2/4 sm:p-5 p-2 space-y-4'>
                   <h2 className='items-details-text'>
                     Fruits Name : Mango 
                    </h2>
                    <h2 className='items-details-text'>
                        Price : $120 
                    </h2>
                    <h2 className='items-details-text'>
                        Supplier Name : Shakib 
                    </h2>
                    <h2 className='items-details-text'>
                        Quantity : 20 
                    </h2>
                    <p className='sm:text-xl font-semibold text-white'>
                        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus doloremque temporibus dolores mollitia dolor voluptatem blanditiis error aspernatur molestiae. 
                    </p>
                    <button className="gradient-btn w-1/4" onClick={handleDecrease}>
                      decrease
                    </button> 
                    <div className='flex'>
                        <input type="number" onBlur={handleIncrease}  name="quantity" placeholder='increase quantity' id="" className='mt-1 placeholder:italic placeholder:font-semibold block w-3/4 rounded-md border-gray-300 shadow-sm border-none focus:ring-2 focus:ring-orange-500 sm:text-sm'/>
                        <button className='gradient-btn w-1/4'>Increase</button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default ItemDetails;