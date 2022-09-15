import { Accordion } from 'flowbite-react';
import React from 'react'
import './ExtraSectionOne.css'

const ExtraSectionOne = () => {
    return (
        <div className='w-full xl:min-h-screen p-5 '>
              <h2 className='lg:text-5xl md:text-4xl text-3xl sm:p-2 py-2 text-center text-white font-semibold font-serif'>
                Why <span className='text-yellow-300'> Choose </span> Our 
                <span className='text-yellow-300'> Fruits </span>
              </h2>
            <div className=' md:p-2 w-full md:h-[500px] h-[800px] xl:m-0 flex items-center'>
                {/* ------------ main content --------------------*/}
                <div className="md:flex w-full md:h-[400px] h-full  backdrop-blur-xl bg-white/20">
                     {/* ----------- img div -----------*/}
                    <div className='md:h-full h-2/5 img-div md:w-2/4 w-full relative ' >
                        <img src="https://i.ibb.co/3FS4YZK/119885919-happy-woman-thinking-and-standing-isolated-over-yellow-background-removebg-preview.png" 
                        className='md:w-[600px] w-full md:-mt-[200px]  h-full min-h-[400px] md:min-h-[500px] xl:min-h-[600px]  absolute bottom-0 md:left-20 left-1/4' alt="" />
                    </div>
                    {/* ------------ accordion div */}
                    <div className="min-h-fit md:h-full h-3/5 md:w-2/4 w-full md:py-2 p-3">
                        <Accordion>
                            <Accordion.Panel>
                                <Accordion.Title>
                                        Fresh Fruits
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        <span className="lg:block responsive-text md:hidden"> 
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in  Duis aute irure 
                                            <span className="xl:hidden">
                                                dolor in aliquip ex ea commodo consequat.     
                                            </span>                      
                                        </span>
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    Chemical Free
                                </Accordion.Title>
                                <Accordion.Content>
                                   <p className='text-white'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut                                     <span className="lg:block md:hidden responsive-text"> 
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in  Duis aute irure 
                                            <span className="xl:hidden">
                                                dolor in aliquip ex ea commodo consequat.     
                                            </span> 
                                     </span>
                                   </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                   On Time Delivery
                                </Accordion.Title>
                                <Accordion.Content>
                                     <p className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut  
                                        <span className="lg:block md:hidden responsive-text"> 
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in  Duis aute irure
                                            <span className="xl:hidden">
                                                dolor in aliquip ex ea commodo consequat.     
                                            </span>                   
                                        </span>
                                     </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                       </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionOne;