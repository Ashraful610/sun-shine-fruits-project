import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const ItemDetails = () => {
    const [user, userLoading, error] = useAuthState(auth);

    const {fruitId} = useParams()
    const [fruit , setFruit] = useState({})
    let {name , price , img , description, suplier , quantity}= fruit

    useEffect(()=>{
        fetch(`https://sleepy-crag-27771.herokuapp.com/fruit/${fruitId}`)
        .then(res => res.json())
        .then(data => setFruit(data))
    },[quantity])


    const handleDecrease = event => {
        event.preventDefault();
        if(quantity > 0) {
            let newQuantity = quantity - 1;
            const updateFruit = {
                "name": name,
                "price": price,
                "description":description,
                "quantity": newQuantity,
                "img": img,
                "suplier": suplier
                }         
                fetch(`https://sleepy-crag-27771.herokuapp.com/fruit/${fruitId}`, {
                    method: 'PUT',
                    body: JSON.stringify(updateFruit),
                    headers: {
                    'Content-type': 'application/json',
                    }
                })
                .then((response) => response.json())
                .then(data => {
                    if(data.modifiedCount == !0){
                      
                    toast.success('Successfully decrease')
                    }
                });

           const newPrice = 1 * parseInt(price)

             const soldFruit = {
                "fruitName": name,
                "userEmail":user?.email,
                "price": newPrice,
                "description":description,
                "quantity": 1,
                "img": img,
                "suplier": suplier
             }   
                handleSoldFruits(soldFruit)
                
        }
    }

    const handleIncrease = event => {
        const number = parseInt(event.target.value)
        if(number > 0) {
            const newQuantity = number + quantity
            const updateFruit = {
                "name": name,
                "price": price,
                "description":description,
                "quantity": newQuantity,
                "img": img,
                "suplier": suplier
                }         
                fetch(`https://sleepy-crag-27771.herokuapp.com/fruit/${fruitId}`, {
                    method: 'PUT',
                    body: JSON.stringify(updateFruit),
                    headers: {
                    'Content-type': 'application/json',
                    }
                })
                .then((response) => response.json())
                .then(data => {
                    if(data.modifiedCount == !0)
                    toast.success('Successfully BuyFruits')
                });

           const newPrice = number * parseInt(price)

             const soldFruit = {
                "fruitName": name,
                "userEmail":user?.email,
                "price": newPrice,
                "description":description,
                "quantity": number,
                "img": img,
                "suplier": suplier
             }   
       handleSoldFruits(soldFruit)
        event.target.value = ''
    }
 }

  //  method use korte hobe
  const handleSoldFruits = (soldFruit) => {
    fetch("http://localhost:4000/sold", {
        method: 'POST',
        body: JSON.stringify(soldFruit),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())
    .then(data => {
        toast.success('Successfully BUY')
    });
    }
    return (
        <div className='min-h-[500px] sm:h-[550px] h-fit md:p-5 p-2'>
            <div className='backdrop-blur-sm bg-white/30 w-full h-full sm:flex'>
                <div className="sm:w-2/4 h-full">
                   <img src={img} alt='' className='w-full h-full'/>
                </div>
               <div className='sm:w-2/4 sm:p-5 p-2 space-y-4'>
                   <h2 className='items-details-text'>
                     Fruits Name : {name}
                    </h2>
                    <h2 className='items-details-text'>
                        Price : ${price} 
                    </h2>
                    <h2 className='items-details-text'>
                        Supplier Name : {suplier} 
                    </h2>
                    <h2 className='items-details-text'>
                        Quantity : {quantity}
                    </h2>
                    <p className='sm:text-xl font-semibold text-white'>
                        Description: {description} 
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