import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import BuyFruits from './BuyFruits/BuyFruits';
import './MyItem.css'

const MyItem = () => {
   const [user, userLoading, error] = useAuthState(auth);
   const [myFruits , setMyFruits] = useState()

         useEffect(() =>{
            fetch(`http://localhost:4000/soldFruits/${user?.email}`)
            .then(res => res.json())
            .then( data => setMyFruits(data))
         },[user?.email])
       
   
    return (
      <div className='w-full h-full p-5'>  
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-left  dark:text-gray-400">
              <thead className=" text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
                  </tr>
              </thead>
              <tbody>
                  {
                   myFruits?.map(fruit => <BuyFruits  key={fruit._id} myfruit={fruit}/>)
                  }
              </tbody>
          </table>
       </div>  
  </div>
    );
};

export default MyItem;