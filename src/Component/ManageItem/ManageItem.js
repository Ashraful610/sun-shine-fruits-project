import React from 'react';
import { Link } from 'react-router-dom';

const ManageItem = () => {
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
                        <tr class="bg-white border-b-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4 w-32 border-r-4">
                                <div className="avatar">
                                    <div className="sm:w-24 w-16 rounded-full ring ring-orange-500  ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td class="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                                <h2 className='lg:text-base text-sm'>Fruits : Apple</h2>
                                <h2 className='lg:text-base text-sm'>Quantity : 20</h2>
                                <h2 className='lg:text-base text-sm'>Supplier : Shakib</h2>
                            </td>
                            <td class="py-4 lg:px-6 px-3 border-x-4">
                            <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vero?</p>
                            </td>
                            <td class="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                                <p className="lg:text-lg text-base"> $599</p>
                            </td>
                            <td class="py-4 lg:px-6 px-3 border-l-4">
                                <a href="#" class="lg:text-lg text-base font-semibold text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4 w-32 border-r-4">
                                <div className="avatar">
                                    <div className="sm:w-24 w-16 rounded-full ring ring-orange-500  ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td class="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                                <h2 className='lg:text-base text-sm'>Fruits : Apple</h2>
                                <h2 className='lg:text-base text-sm'>Quantity : 20</h2>
                                <h2 className='lg:text-base text-sm'>Supplier : Shakib</h2>
                            </td>
                            <td class="py-4 lg:px-6 px-3 border-x-4">
                            <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vero?</p>
                            </td>
                            <td class="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                                <p className="lg:text-lg text-base"> $599</p>
                            </td>
                            <td class="py-4 lg:px-6 px-3 border-l-4">
                                <a href="#" class="lg:text-lg text-base font-semibold text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4 w-32 border-r-4">
                                <div className="avatar">
                                    <div className="sm:w-24 w-16 rounded-full ring ring-orange-500  ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td class="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                                <h2 className='lg:text-base text-sm'>Fruits : Apple</h2>
                                <h2 className='lg:text-base text-sm'>Quantity : 20</h2>
                                <h2 className='lg:text-base text-sm'>Supplier : Shakib</h2>
                            </td>
                            <td class="py-4 lg:px-6 px-3 border-x-4">
                            <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vero?</p>
                            </td>
                            <td class="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                                <p className="lg:text-lg text-base"> $599</p>
                            </td>
                            <td class="py-4 lg:px-6 px-3 border-l-4">
                                <a href="#" class="lg:text-lg text-base font-semibold text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4 w-32 border-r-4">
                                <div className="avatar">
                                    <div className="sm:w-24 w-16 rounded-full ring ring-orange-500  ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td class="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                                <h2 className='lg:text-base text-sm'>Fruits : Apple</h2>
                                <h2 className='lg:text-base text-sm'>Quantity : 20</h2>
                                <h2 className='lg:text-base text-sm'>Supplier : Shakib</h2>
                            </td>
                            <td class="py-4 lg:px-6 px-3 border-x-4">
                            <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vero?</p>
                            </td>
                            <td class="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                                <p className="lg:text-lg text-base"> $599</p>
                            </td>
                            <td class="py-4 lg:px-6 px-3 border-l-4">
                                <a href="#" class="lg:text-lg text-base font-semibold text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                
                
                    </tbody>
                </table>
            </div>  
        </div>
    </div>
    );
};

export default ManageItem;