import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddItem.css'

const AddItem = () => {
    const navigate = useNavigate();
    const [error , setError] = useState({
         fruitsNameError:'',
         priceError:'',
         supplierError:'',
         quantityError:'',
         descriptionError:'',
         fruitsPhotoError:'',
        }
        )

    const handleFruitsAdd = event =>{
        event.preventDefault();
        const fruitsName = event.target.fruitsName?.value
        const price = event.target.price?.value
        const supplier = event.target.supplierName?.value
        const quantity = event.target.quantity?.value
        const description = event.target.description?.value
        const fruitPhoto = event.target.fruitPhoto?.value
        if(fruitsName === '' && price === '' && supplier === '' && quantity === '' && description === '' && fruitPhoto === '') {
            setError({
                fruitsNameError:'name is required' ,
                priceError: 'price is required',
                supplierError: 'supplier is required',
                quantityError: 'quantity is required',
                descriptionError: 'description is required', 
                fruitsPhotoError: 'fruits photo is required'
            })

        }
       else if(fruitsName === ''){
            setError({fruitsNameError:'fruits name is required'})
        }
        else if(price === ''){
            setError({priceError:'price is required'})
        }
        else if(supplier === ''){
            setError({supplierError:'supplier is required'})
        }
        else if(quantity === ''){
            setError({quantityError:'quantity is required'})  
        }
        else if(description === '') {
                setError({descriptionError:'description is required'})
        }
        else if(fruitPhoto === '') {
            setError({fruitsPhotoError:'fruits photo is required'})
        }
        else{
            const fruit = {
            "name":fruitsName ,
            "price": price,
            "description":description,
            "quantity": quantity,
            "img": fruitPhoto,
            "suplier": supplier
            }
            fetch('http://localhost:4000/fruit', {
            method: 'POST',
            body: JSON.stringify(fruit),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

           navigate('/manageItem')

        }
    }
    return (
 <div className="w-full h-fit sm:p-5 bg-gradient-to-r from-yellow-400 to-rose-600">
    
   <div className=" w-full h-full sm:flex  ">
    {/* ------------------- form   */}
       <form onSubmit={handleFruitsAdd} className='sm:w-2/4 w-full px-4 py-5 sm:p-6 backdrop-blur-sm bg-white/30'>
            <div className=" w-full ">
              <div className="grid grid-cols-6 gap-6">
                        {/* -------------- fruits name --------------------*/}
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-white">
                                Fruits name
                            </label>
                            <input
                                type="text"
                                name="fruitsName"
                                placeholder='fruits name'
                                className="common-input-field"
                            />
                           {error?.fruitsNameError && 
                           <p className="text-red-500 text-base font-semibold">
                            {error.fruitsNameError}
                            </p> 
                           }
                        </div>
                        {/* -------------- price -------------------- */}
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-white">
                                Price
                            </label>
                           <input
                            type="number"
                            name="price"
                            placeholder='price'
                            className="common-input-field"
                           />
                           {error?.priceError && 
                           <p className="text-red-500 text-base font-semibold">
                            {error.priceError}
                            </p> 
                           }
                        </div>
                        {/* -------------- supplier name ----------------*/}
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email-address" className="block text-sm font-medium text-white">
                                Supplier name
                            </label>
                            <input
                                type="text"
                                name="supplierName"
                                placeholder='supplier name'
                                className="common-input-field"
                            />
                            {error?.supplierError && 
                             <p className="text-red-500 text-base font-semibold">
                                {error.supplierError}
                            </p> 
                            }
                        </div>
                        {/* ------------------- quantity -------------------- */}
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-white">
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder='quantity'
                                className="common-input-field"
                            />
                            {error?.quantityError && 
                           <p className="text-red-500 text-base font-semibold">
                            {error.quantityError}
                            </p> 
                           }
                        </div>
                         {/* --------------- fruits image --------------------*/}
                         <div className='col-span-6'>
                            <label className="block text-sm font-medium text-white">
                                Fruits photo
                            </label>
                            <input type="text" name="fruitPhoto" placeholder='upload photo ' className='w-full common-input-field' id="" />
                            {error?.fruitsPhotoError && 
                                      <p className="text-red-500 text-base font-semibold">
                                        {error.fruitsPhotoError}
                                        </p> 
                               } 
                        </div>   
                        {/* -------------------- description --------------------*/}
                        <div className='col-span-6 '>
                            <label htmlFor="about" className="block text-sm font-medium text-white">
                            Description
                            </label>
                            <div className="mt-1">
                                <textarea
                                    name="description"
                                    rows={4}
                                    className="common-input-field"
                                    placeholder="description"
                                    defaultValue={''}
                                />
                                {error?.descriptionError && 
                                  <p className="text-red-500 text-base font-semibold">
                                    {error.descriptionError}
                                 </p> 
                               }
                          </div>
                        </div>
              </div>
              {/* -------------- button div ------------------------------ */}
              <div className="px-4 pt-3 text-center sm:px-6">
                <button type="submit" className="gradient-btn lg:w-1/4  w-2/4">
                    Submit
                </button>
              </div>
            </div>
       </form>
        {/* -------------- content -------------------------------- */}
        <div className="sm:w-2/4 min-h-fit w-full relative">
           <img src="https://i.ibb.co/gv1YkLm/bonshayi-ornage.jpg" className="w-full sm:h-full min-h-[400px] brightness-50" alt="" />
           {/* --------------- text div -------------------- */}
           <div className="absolute top-1/4 space-y-5 p-2">
                <h2 className=" sm:inset-x-0 inset-x-2 text-center text-white sm:text-4xl text-3xl font-semibold italic">Please Add Your Dream Fruits</h2>
                <p className=" sm:inset-x-0 inset-x-2 text-center text-white sm:text-lg text-base font-semibold italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum quam commodi quo alias consequatur incidunt dolor aliquid cupiditate a.</p>
                <button
                    type=""
                    className="gradient-btn absolute sm:inset-x-0 inset-x-2 lg:w-2/6 w-3/6
                     text-[10px] mx-auto my-0 p-0"
                  >
                    Explore more 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2 right-arrow">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </button>
           </div>
        </div>
   </div>
</div>
    );
};

export default AddItem;