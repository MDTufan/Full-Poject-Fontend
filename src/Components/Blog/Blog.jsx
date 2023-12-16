/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
// import aboutHero from '../../assets/about-img1.jpg';
// import aboutMen from '../../assets/about-img2.jpg';
import b from '../../assets/b.jpg';
import b1 from '../../assets/b1.jpg';
import b2 from '../../assets/b2.png';
import b3 from '../../assets/b3.png';
import b4 from '../../assets/b4.png';


const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='about'>
            <div className="about-header d-block pt-5">
                <h1 className='py-5 mb-0 mt-5 text-center'>About</h1>
            </div>
            
           <div className="container py-5">
            <div className="row py-5">
                <div className="col-12 col-md-6 col-sm-6">
                    <img className='img-fluid shadow-lg rounded'  src={b} alt="" />
                </div>
                <div className="col-12 col-md-6 col-sm-6">
                    <div className="">
                        <h1>White is HTML ?</h1>
                        <p>HTML stands for Hypertext Markup Language. It is a standard markup language used to design the documents displayed in the browsers as a web page. This language can become more interactive and attractive by using CSS ( Cascading Style Sheet) and JS (JavaScript) within it.</p> <br/>
                        <p>The HTML word defines some specific meaning within it. Hypertext comes from the Hyperlink which means connections between several pages, Markup means the defined elements will be the page layout and elements within the page. The language combines both the feature and makes it Hypertext Markup Language. </p>
                    </div>
                </div>
            </div>
            
           </div>
           <div className="container py-5">
            <div className="row py-5">
                
                <div className="col-12 col-md-6 col-sm-6">
                    <div className="">
                        <h1>What is CSS?</h1>
                        <li>CSS stands for Cascading Style Sheets</li>
                        <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
                        <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
                        <li>External stylesheets are stored in CSS files</li>
                         <br/>
                        <p>CSS can be used for very basic document text styling — for example, for changing the color and size of headings and links. It can be used to create a layout — for example, turning a single column of text into a layout with a main content area and a sidebar for related information. It can even be used for effects such as animation. Have a look at the links in this paragraph for specific examples.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6">
                    <img className='img-fluid shadow-lg rounded' src={b1} alt="" />
                </div>
            </div>
            
           </div>
           <div className="container py-5">
            <div className="row py-5">
                <div className="col-12 col-md-6 col-sm-6">
                    <img className='img-fluid shadow-lg rounded' src={b2} alt="" />
                </div>
                <div className="col-12 col-md-6 col-sm-6">
                    <div className="">
                        <h1>White is Javascript ?</h1>
                        <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)</p> <br/>
                        <p>In our first JavaScript module, we first answer some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", before moving on to taking you through your first practical experience of writing JavaScript. After that, we discuss some key building blocks in detail, such as variables, strings, numbers and arrays.</p>
                    </div>
                </div>
            </div>
            
           </div>
            <div className="shipping">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" /></svg> */}
                            <h1 className='text-white'>Javascript</h1>
                            <p className='text-white'>JavaScript is a scripting language that enables you to create dynamically</p>
                        </div>
                        <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" /></svg> */}
                            <h1 className='text-white'>React</h1>
                            <p className='text-white'>React.js is an open-source JavaScript library,</p>
                        </div>
                        <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z" /></svg> */}
                            <h1 className='text-white'>Node.Js & Express.Js</h1>
                            <p className='text-white'>Backend Best Javascript Languse,,</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
            <div className="row py-5">
                <div className="col-12 col-md-6 col-sm-6">
                    <img className='img-fluid shadow-lg rounded' src={b3} alt="" />
                </div>
                <div className="col-12 col-md-6 col-sm-6">
                    <div className="">
                        <h1>React...!</h1>
                        
                        <p>React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.</p><br/>
                        <p>Today, front-end frameworks and libraries are becoming an essential part of the modern web development stack. React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.</p> 
                    </div>
                </div>
            </div>
            
           </div>
           <div className="container py-5">
            <div className="row py-5">
                <div className="col-12 col-md-6 col-sm-6">
                    <img className='img-fluid shadow-lg rounded' src={b4} alt="" />
                </div>
                <div className="col-12 col-md-6 col-sm-6">
                    <div className="">
                        <h1>White is Node.Js ?</h1>
                        <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p> <br/>
                        <p>Node.js being designed without threads doesn't mean you can't take advantage of multiple cores in your environment. Child processes can be spawned by using our child_process.fork() API, and are designed to be easy to communicate with. Built upon that same interface is the cluster module, which allows you to share sockets between processes to enable load balancing over your cores.</p>
                    </div>
                </div>
            </div>
            
           </div>
        </div>
    );
};

export default Blog;