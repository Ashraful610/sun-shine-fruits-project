import React from 'react';
import { Link } from 'react-router-dom';
import useFruits from '../Hooks/useFruits/useFruits';
import TableRow from '../TableRow/TableRow';

const ManageItem = () => {
    const fruits = useFruits()
    
    return (
    <div className='sm:p-5 p-2'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white font-serif md:p-4 p-2'>
             Welcome to Our Manage Inventory Page
        </h2>
        <div className='text-right'>
            <Link to='/addItem' className='gradient-btn sm:w-[200px] w-[150px]'>Add New Item</Link>
        </div>
       <div className='w-full h-full py-5'>  
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-left  dark:text-gray-400">
                    <thead class=" text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                            Photo
                            </th>
                            <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                Fruits Details
                            </th>
                            <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                Description
                            </th>
                            <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                Price
                            </th>
                            <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         fruits.map(fruit => <TableRow  key={fruit._id} fruit={fruit}/>)
                        }
                    </tbody>
                </table>
            </div>  
        </div>
    </div>
    );
};

export default ManageItem;