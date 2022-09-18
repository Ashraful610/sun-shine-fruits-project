import React from 'react';
import { Link } from 'react-router-dom';
import useFruits from '../Hooks/useFruits/useFruits';
import Item from '../Item/Item';
import './Items.css'
import Loading from '.././Shared/Loading/Loading'

const Items = () => {
   // -------------- get all fruits data from useFruits custom hooks
   const fruits = useFruits()
   const newFruits = fruits.slice(0 , 6)
    return (
        <div className='w-full min-h-screen py-8 px-5 '>
            <h2 className='text-5xl text-center text-white font-semibold font-serif'>Our
               <span className='text-yellow-300'> Fruits </span>
             </h2>
            <div className="w-full h-full  py-10 grid sm:grid-cols-2 gap-5">
                {
                  newFruits?.map(fruit => <Item key={fruit._id} fruit={fruit}></Item>)
                }
            </div>
            <div className='text-right'>
               <Link to='/manageItem' className='gradient-btn sm:w-[200px] w-[150px]'>
                 Manage Inventory
               </Link>
            </div>
        </div>
    );
};

export default Items;