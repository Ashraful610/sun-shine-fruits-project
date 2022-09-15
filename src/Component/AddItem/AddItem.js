import React, { useState } from 'react';
import './AddItem.css'

const AddItem = () => {
    const [error , setError] = useState(
        {
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
        const fruitsName = event.target.fruitsName.value
        const price = event.target.price.value
        const supplier = event.target.supplierName.value
        const quantity = event.target.quantity.value
        const description = event.target.description.value
        const fruitsPhoto = event.target.fruitsPhoto.value
        if(fruitsName === '' && price === '' && supplier === '' && quantity === '' && description === '' && fruitsPhoto === '') {
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
        else if(fruitsPhoto === '') {
            setError({fruitsPhotoError:'fruits photo is required'})
        }
        else{
            console.log(fruitsName , price ,supplier , quantity , description , fruitsPhoto);
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
                        {/* --------------- fruits image --------------------*/}
                        <div className='col-span-6'>
                            <label className="block text-sm font-medium text-white">
                                Fruits photo
                            </label>
                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-4 border-gray-300 px-6 pt-5 pb-6 bg-white">
                               <div className="space-y-1 text-center">
                                    <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                    >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                  <div className="flex text-sm text-gray-600">
                                    <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500  focus-within:ring-offset-2 hover:text-indigo-500"
                                     >
                                    <span>Upload a file</span>
                                      <input id="file-upload" name="fruitsPhoto" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                  </div>
                                </div>
                            </div>
                            {error?.fruitsPhotoError && 
                                      <p className="text-red-500 text-base font-semibold">
                                        {error.fruitsPhotoError}
                                        </p> 
                                  }   
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