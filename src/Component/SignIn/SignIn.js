import React, { useState } from 'react'
import './SignIn.css'

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
    return (
    <div className='w-full h-fit lg:p-8 md:p-6 p-4 bg-gradient-to-r from-yellow-400 to-rose-600'>
        <div className={`main-container ${value ? 'sign-up-mode' : 'sign-in-mode'}  backdrop-blur-sm bg-white/30`}>
            {/* ---------- form container ---------- */}
             <div className="form-container">
                {/* ---------- sign in ----- sign up ----- */}
                <div className="sign-in-sign-up">
                    {/* ----------- sing in form ----------- */}
                    <form action="" className="sign-in-form  p-5">
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
                               <input type="email" placeholder='User email' className="placeholder:italic placeholder:font-semiboldw-full h-10  border-none focus:ring-0"/>
                            </div>
                            {/* ----------password input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full  my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                    {/*----------- input field -----------  */}
                                  <input type="password" placeholder='User password' className="w-full h-10 placeholder:italic placeholder:font-semibold border-none focus:ring-0"/>
                            </div>
                            {/* ------------ submit button ----------- */}
                            <div className='w-2/4 mx-auto'>
                              <input type="submit" value="Sign In" className='btn w-full  bg-gradient-to-r from-yellow-400 to-rose-600 border-none '/>
                            </div>
                            {/* ---------- divider ---------- */}
                            <div className="divider text-white ">Or continue with</div>
                            <button className=" btn w-full bg-gradient-to-r from-yellow-400 to-rose-600 border-none  ">
                                    Google
                            </button>
                        </div>
                    </form>
                    <form action="" className="sign-up-form   p-5 ">
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
                            <input type="text" placeholder='User name' className="placeholder:italic placeholder:font-semiboldw-full h-10  border-none focus:ring-0"/>
                            </div>
                            {/* ---------- email input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                    {/*----------- input field -----------  */}
                               <input type="email" placeholder='User email' className="placeholder:italic placeholder:font-semiboldw-full h-10  border-none focus:ring-0"/>
                            </div>
                            {/* ----------password input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full  my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                    {/*----------- input field -----------  */}
                                  <input type="password" placeholder='User password' className="w-full h-10 placeholder:italic placeholder:font-semibold border-none focus:ring-0"/>
                            </div>
                            {/* ------------ submit button ----------- */}
                            <div className='w-2/4 mx-auto'>
                              <input type="submit" value="Sign Up" className='btn w-full  bg-gradient-to-r from-yellow-400 to-rose-600 border-none '/>
                            </div>
                            {/* ------------ divider ----------- */}
                            <div className="divider text-white ">Or continue with</div>
                            <button className=" btn w-full bg-gradient-to-r from-yellow-400 to-rose-600 border-none  ">
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