import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
    <div className='container'>
        <h1 className='md:text-4xl text-3xl text-white font-semibold text-center m-4'>
            Question Answer
        </h1> 
         <div className='p-5 w-full'>
               <div className='p-2 mb-4 rounded bg-white'>
                   <h2 className='md:text-3xl text-2xl font-semibold text-center'>
                      Difference between javascript and node.js
                    </h2>
                    <div className='sm:flex gx-4 p-3'>
                        <div className='sm:w-2/4 p-2'>
                            <h4 className='text-2xl font-semibold  text-center'>Javascript</h4>
                            <p>
                                Javascript is a Scripting language. It is mostly abbreviated as JS.Javascript is a programming language that is used for writing scripts on the website. It is basically used on the client-side.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 
                            </p>
                        </div>
                        <div className='sm:w-2/4 p-2'>
                            <h4 className='text-2xl font-semibold  text-center'>Node JS</h4>
                            <p>
                                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. We can run Javascript outside the browser with the help of NodeJS.V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is written in C, C++ and Javascript
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2 mb-4 rounded bg-white'> 
                  <h2 className='text-2xl font-semibold text-center'>When should use node js and when should use mongodb</h2>
                    <div className='sm:flex p-3'>
                        <div className=' p-2'>
                            <h4 className='text-2xl font-semibold  text-center'>Node JS</h4>
                            <p>
                                Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                        </p>
                        </div>
                        <div className=' p-2'>
                            <h4 className='text-2xl font-semibold text-center'>Mongo DB</h4>
                            <p>
                                MongoDB is a general-purpose database used in various ways to support applications in many different industries (e.g., telecommunications, gaming, finances, healthcare, and retail). MongoDB has found a home in many different businesses and functions because it solves long-standing problems in data management and software development. Typical use cases for MongoDB include:
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2 mb-4 rounded bg-white'> 
                  <h2 className='text-2xl font-semibold text-center'>Differences between SQL and NOSQL database</h2>
                    <div className='sm:flex p-3'>
                        <div className=' p-2'>
                            <h4 className='text-2xl font-semibold  text-center'>SQL Database</h4>
                            <p>
                                An SQL database—also known as a relational database—and named for the programming language it’s written in, Structured Query Language (SQL). It’s the more rigid, structured way of storing data. A relational database management system (RDBMS) executes queries, retrieves data, and edits data by updating, deleting, or creating new records
                        </p>
                        </div>
                        <div className=' p-2'>
                            <h4 className='text-2xl font-semibold  text-center'>NoSQL Database</h4>
                            <p>
                                NoSQL databases--also known as “non SQL” or “not only SQL,” store data in a format other than relational tables. If your data requirements aren’t clear at the outset or if you’re dealing with massive amounts of unstructured data, you’ll want to use non-relational databases because they offer greater flexibility.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2 mb-4 bg-white rounded'> 
                <h2 className='text-2xl font-semibold  text-center'>What is the purpose of JWT and how does it work</h2>
                    <div className='sm:flex p-3'>
                        <p>
                            JSON Web Tokens, or just JWTs (pron. [ˈdʒɒts]), are the new fancy kids around the block when it comes to transporting proofs of identity within an untrusted environment like the Web. In this article, I will describe the true purpose of JWTs. I will compare classical, stateful authentication with modern, stateless authentication. And I will explain why it is important to understand the fundamental difference of both approaches.so lets break it up into a simpler logic to understand its utility and the way it works!  
                        </p>
                    </div>
                </div>
         </div>
     </div>
    );
};

export default Blog;