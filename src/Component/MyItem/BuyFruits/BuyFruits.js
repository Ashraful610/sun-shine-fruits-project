import React from 'react';

const BuyFruits = ({myfruit}) => {
    const {fruitName , price, description, quantity, img, suplier } =myfruit;
    return (
        <tr className="bg-white border-b-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-32 border-r-4">
                   <div className="avatar">
                       <div className="sm:w-24 w-16 rounded-full ring ring-orange-500  ring-offset-2">
                           <img src={img} />
                       </div>
                   </div>
              </td>
              <td className="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                  <h2 className='lg:text-base text-sm'>Fruits : {fruitName}</h2>
                  <h2 className='lg:text-base text-sm'>Quantity : {quantity}</h2>
                  <h2 className='lg:text-base text-sm'>Supplier : {suplier}</h2>
              </td>
              <td className="py-4 lg:px-6 px-3 border-x-4">
                  <p className='lg:text-base text-sm'>{description}</p>
              </td>
              <td className="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
                  <p className="lg:text-lg text-base"> ${price}</p>
              </td>
          </tr>
    );
};

export default BuyFruits;