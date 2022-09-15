import React from 'react';
import './MyItem.css'

const MyItem = () => {
    return (
   <div className='w-full h-full sm:p-5 p-2 gradient-bg'>
      <div className='myItem'>
       
         <div className='backdrop-blur-xl bg-white/20 p-3 w-[608px] flex justify-between rounded hover:shadow-xl'>
             <div className="avatar">
                        <div className="sm:w-24 w-16 rounded-full ring ring-orange-500  ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
             </div>
             <div className="h-full justify-center flex flex-col ">
                <h2 className='text-white sm:text-lg '>Fruits : Apple</h2>
                <h2 className='text-white sm:text-lg '>Price : $120</h2>
                <h2 className='text-white sm:text-lg '>Supplier : Shakib</h2>
             </div>
             <div className="h-full items-center flex">
                <button className='gradient-btn'>Cancel</button>
             </div>
          </div>
         <div className='backdrop-blur-xl bg-white/20 p-3 w-[608px] flex justify-between rounded hover:shadow-xl'>
             <div className="avatar">
                        <div className="sm:w-24 w-16 rounded-full ring ring-orange-500  ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
             </div>
             <div className="h-full justify-center flex flex-col ">
                <h2 className='text-white sm:text-lg '>Fruits : Apple</h2>
                <h2 className='text-white sm:text-lg '>Price : $120</h2>
                <h2 className='text-white sm:text-lg '>Supplier : Shakib</h2>
             </div>
             <div className="h-full items-center flex">
                <button className='gradient-btn'>Cancel</button>
             </div>
          </div>
      </div>
      
  </div>
    );
};

export default MyItem;