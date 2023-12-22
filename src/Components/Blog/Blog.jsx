/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import aboutHero from '../../assets/about-img1.jpg';
// import aboutMen from '../../assets/about-img2.jpg';
import b from '../../assets/b.jpg';
import b1 from '../../assets/b1.jpg';
import b2 from '../../assets/b2.png';
import b3 from '../../assets/b3.png';
import b4 from '../../assets/b4.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Blog = () => {
    const [counteron,setcounteron]=useState(false);
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
                    {/* <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
                    <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            
                            <h1 className='text-white fw-bold'>
                               {
                                counteron &&  <CountUp start={0} end={100} duration={2}  delay={0}/> 
                               }
                               %
                            </h1>
                            <p className='text-white'>JavaScript </p>
                        </div>
                    </ScrollTrigger> */}
                        <div  className="col-12 col-md-4 text-center">
                        <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
                    <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            
                            <h1 className='text-white fw-bold'>
                               {
                                counteron &&  <CountUp start={0} end={100} duration={4}  delay={0}/> 
                               }
                               %
                            </h1>
                            <p className='text-white'>JavaScript </p>
                        </div>
                    </ScrollTrigger>
                        </div>
                        <div  className="col-12 col-md-4 text-center">
                        <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
                    <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            
                            <h1 className='text-white fw-bold'>
                               {
                                counteron &&  <CountUp start={0} end={400} duration={4}  delay={0}/> 
                               }
                               %
                            </h1>
                            <p className='text-white'>React </p>
                        </div>
                    </ScrollTrigger>
                        </div>
                        <div  className="col-12 col-md-4 text-center">
                        <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
                    <div data-aos='zoom-in' data-aos-duration='3000' className="col-12 col-md-4 text-center">
                            
                            <h1 className='text-white fw-bold'>
                               {
                                counteron &&  <CountUp start={0} end={100} duration={4}  delay={0}/> 
                               }
                               %
                            </h1>
                            <p className='text-white'>Node </p>
                        </div>
                    </ScrollTrigger>
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