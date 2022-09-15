import React, { useEffect, useState } from 'react'
import './SignIn.css'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';
import toast from 'react-hot-toast';

const SignIn = () => {
     const [value , setValue] = useState(false)
     const signUpMode = () => {
           if(value === false){
            setValue(true)
           }
           else{
            setValue(false)
           }
     }
    //  ----------- user
     const [user , setUser] = useState()
     useEffect(() =>{
         onAuthStateChanged(auth, (user) => {
             if(user){
                 setUser(user);
             }
         })
     },[])
 
    //  -------------- toast style
    const toastStyle = { 
               duration: 4000,position: 'top-right',
               style: {
               backgroundImage:'linear-gradient(-45deg ,rgb(197, 197, 8) , rgb(220, 17, 17))',
               color:'white'
                }
              }

    //  google authentication
    const provider = new GoogleAuthProvider();
    const googleUser = (event) => {
        event.preventDefault()
        signInWithPopup(auth, provider)
        .then((result) => {
            toast.success(`Welcome to our Website ${user?.email}`, toastStyle);
          })
        .catch((error) => {
            toast.error(error?.message,toastStyle);
         });
    }
   
    //  handle user sign up
    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            toast.success(`Welcome to our Website ${user?.email}`,toastStyle);
          })
        .catch((error) => {
            const errorMessage = error.message
            if(errorMessage.includes('email-already-in-use')){
                toast.error('The email address is already in use by another account. So please sign in or use another email address', toastStyle);
            }
            else if(errorMessage.includes('weak-password')){
                toast.error('Please give a strong password', toastStyle);
            }
            else{
                toast.error(errorMessage, toastStyle);
            }
         });
    }

    // handle user sign  in
    const handleSignIn = event => { 
        event.preventDefault();
        const email = event.target.email?.value
        const password = event.target.password?.value

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            toast.success(`Welcome to our Website ${user?.email}`,toastStyle);
          })
        .catch((error) => {
            const errorMessage = error.message
            if(errorMessage.includes('user-not-found')){
                toast.error('You have a no account, Please sign up', toastStyle);
            }
            else if(errorMessage.includes('wrong-password')){
                toast.error('Your password is incorrect, give the correct password', toastStyle);
            }
            else{
                toast.error(errorMessage, toastStyle);
            }
         });

    }
    return (
    <div className='w-full h-fit lg:p-8 md:p-6 p-4 '>
        <div className={`main-container ${value ? 'sign-up-mode' : 'sign-in-mode'}  backdrop-blur-sm bg-white/30`}>
            {/* ---------- form container ---------- */}
             <div className="form-container">
                {/* ---------- sign in ----- sign up ----- */}
                <div className="sign-in-sign-up">
                    {/* ----------- sing in form ----------- */}
                    <form onSubmit={handleSignIn} className="sign-in-form  p-5">
                        <div className='mx-auto '>
                            {/* ---------- form title */}
                             <h2 className="text-3xl text-center font-semibold font-serif text-white">
                               Sign In
                            </h2>
                            {/* ---------- email input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                    {/*----------- input field -----------  */}
                                <input type="email" placeholder='User email' name='email' className="placeholder:italic placeholder:font-semibold w-full h-10  border-none focus:ring-0"/>
                            </div>
                            {/* ----------password input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full  my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                    {/*----------- input field -----------  */}
                                <input type="password" placeholder='User password' className="w-full h-10 placeholder:italic placeholder:font-semibold border-none focus:ring-0" name='password'/>
                            </div>
                            {/* ------------ submit button ----------- */}
                            <div className='w-2/4 mx-auto'>
                              <input type="submit" value="Sign In" className='gradient-btn w-full   '/>
                            </div>

                            {/* ---------- divider ---------- */}
                            <div className="divider text-white ">Or continue with</div>
                            {/* ---------------- google button ---------- */}
                            <button className=" gradient-btn w-full " onClick={googleUser}>
                                    Google
                            </button>
                        </div>
                    </form>

                    {/* ------------------ sign up form ----------------*/}
                    <form onSubmit={handleSignUp} className="sign-up-form p-5 ">
                        <div className='mx-auto '>
                            {/* ---------- form title */}
                             <h2 className="text-3xl text-center font-semibold font-serif text-white">
                               Sign Up
                            </h2>
                             {/* ---------- name input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                             </svg>
                                    {/*----------- input field -----------  */}
                              <input type="text" placeholder='User name' className="placeholder:italic placeholder:font-semibold w-full h-10  border-none focus:ring-0" name='name'/>
                            </div>
                            {/* ---------- email input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                    {/*----------- input field -----------  */}
                               <input type="email" placeholder='User email' className="placeholder:italic placeholder:font-semibold w-full h-10  border-none focus:ring-0" name='email'/>
                            </div>
                            {/* ----------password input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full  my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                    {/*----------- input field -----------  */}
                                <input type="password" placeholder='User password' className="w-full h-10 placeholder:italic placeholder:font-semibold border-none focus:ring-0" name='password'/>
                            </div>
                            {/* ------------ submit button ----------- */}
                            <div className='w-2/4 mx-auto'>
                              <input type="submit" value="Sign Up" className='w-full gradient-btn '/>
                            </div>

                            {/* ------------ divider ----------- */}
                            <div className="divider text-white ">Or continue with</div>

                            {/* ---------------- google button ---------- */}
                            <button className=" gradient-btn w-full" onClick={googleUser}>
                                    Google
                            </button>
                        </div>
                    </form>
                </div>
             </div>
             {/* ----------- panels container -----------*/}
             <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h2 >New here ?</h2>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit?</p>
                        <button className='btn transparent' onClick={signUpMode} id='sign-up-btn'>Sign up</button>
                    </div>
                   <img src="https://i.ibb.co/rHBzwQt/computer-removebg-preview.png" className='image' alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h2 >One of us ?</h2>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit?</p>
                        <button className='btn transparent' onClick={signUpMode} id='sign-in-btn'>Sign in</button>
                    </div>
                   <img 
                    src="https://i.ibb.co/hyjpPdG/undraw-To-the-stars-re-wq2x-removebg-preview.png" className='image' alt="" />
                </div>
             </div>
        </div>
    </div>
    );
};

export default SignIn;