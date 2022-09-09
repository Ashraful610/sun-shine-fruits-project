import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import auth from '../../../Firebase/Firebase.init';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [user , setUser] = useState()

    const toastStyle = { 
        duration: 4000,position: 'top-right',
        style: {
        backgroundImage:'linear-gradient(-45deg ,rgb(197, 197, 8) , rgb(220, 17, 17))',
        color:'white'
         }
       }

      useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
               if(user){
                   setUser(user);
               }
        })
    },[])

    //  handle sign out
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            toast.success(`${user.email} successfully signed out`,toastStyle);
            setUser()
          })
        .catch((error) => {
            toast.error(error.message, toastStyle);
          });
        }        

    return (
    <div className="navbar sm:px-5 px-2 sm:py-3 py-1 w-full  shadow bg-gradient-to-r from-yellow-400 to-rose-700">
        <div className="navbar-start w-4/6 ">
             {/* -------------- small navigation -------------------- */}
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden p-0 pr-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/home' className='text-xl px-2'>Home</Link>
                    <Link to='/addItem' className='text-xl px-2' px-2>Add Item</Link>
                    <Link to='/myItem' className='text-xl px-2'>My Item</Link>
                    <Link to='/manageItem' className='text-xl px-2'>Manage Item</Link> 
                </ul>
            </div>
            <h2 className='text-3xl text-white sm:text-4xl xl:text-4xl lg:text-3xl font-medium font-serif xl:mx-7 lg:mx-2'>
                Fruits Graden
            </h2>
             {/*  ------------ large device block -------- */}
            <div className=" hidden lg:flex mx-4">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/home' className='text-xl text-white xl:mx-4 lg:mx-2'>Home</Link>
                    <Link to='/addItem' className='text-xl text-white xl:mx-4 lg:mx-2'>Add Item</Link>
                    <Link to='/myItem' className='text-xl text-white xl:mx-4 lg:mx-2'>My Item</Link>
                    <Link to='/manageItem' className='text-xl text-white xl:mx-4 lg:mx-2'>Manage Item</Link> 
                </ul>
           </div>
        </div>
        <div className="navbar-end w-2/6">
               {
                user ? 
                 <>
                   <h2 className='text-lg text-white'>{user.email}</h2>
                    <button className='text-xl text-white px-2 font-semibold sm:mx-10'
                     onClick={handleSignOut}>
                    Sign Out
                    </button>
                 </>
                : <Link to='/signIn' className='text-xl text-white px-2 font-semibold sm:mx-10'>Sign In</Link>
               }
        </div>
    </div>
    );
};

export default Navbar;