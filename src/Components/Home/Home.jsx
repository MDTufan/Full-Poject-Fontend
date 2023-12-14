/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import bannerImgOne from '../../assets/pd1.png';
import bannerImgTwo from '../../assets/p1.png';
import bannerImgThree from '../../assets/p.png';
import man from '../../assets/man.png';
import Product from '../SignleProduct/Product';



const Home = (productid) => {
    // const products = useLoaderData();
    
    const[productall,setproductall]=useState([]);
    console.log(productall);
    useEffect(() => {
        window.scrollTo(0, 0);

        fetch('products.json')
        .then(res=>res.json())
        .then(data =>{
           setproductall(data);
            
        })
    }, []);



    return (
        // <div className="">
        //    <h1> jjjjjjjj</h1>
        // </div>
        <div className='home'>
            <div className="slider-section">
                <Carousel data-bs-theme="dark" className='carousel-fade'>
                    <Carousel.Item>
                        <div className="slideBgOne">
                            <div className="row py-5 justify-content-center align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="w-50 mx-auto ps-5 res-width">
                                        <h1 data-aos='fade-left' data-aos-duration='1000' className='animate__animated animate__fadeInRight animated__slower'>Sale 20% Off</h1>
                                        <h5 data-aos='fade-left' data-aos-duration='1000' className='slider-header  animate__animated animate__fadeInLeft animated__slower'>Everything</h5>
                                        <p className=''>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?...</p>
                                        <Link data-aos='fade-left' data-aos-duration='1000' to="/products"><button className='btn btn-pink slide-btn rounded-pill animate__animated animate__bounceInDown animated__slower'>Shop Now</button></Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-center">
                                    <img className='banner-1 p-4 img-fluid animate__animated animate__bounceInUp animated__slower' src={bannerImgOne} alt="fisino" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slideBgTwo">
                            <div className="row py-5 justify-content-center align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="w-50 mx-auto ps-5 res-width">
                                    <h1 data-aos='fade-left' data-aos-duration='1000' className='animate__animated animate__fadeInRight animated__slower'>Sale 20% Off</h1>
                                        <h5 data-aos='fade-left' data-aos-duration='1000' className='slider-header  animate__animated animate__fadeInLeft animated__slower'>Everything</h5>
                                        <p className=''>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?...</p>
                                        <Link data-aos='fade-left' data-aos-duration='1000' to="/products"><button className='btn btn-pink slide-btn rounded-pill animate__animated animate__bounceInDown animated__slower'>Shop Now</button></Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-center">
                                    <img className='banner-2 p-4 img-fluid  animate__animated animate__bounceInUp animated__slower' src={bannerImgTwo} alt="fisino" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slideBgThree">
                            <div className="row py-5 justify-content-center align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="w-50 mx-auto ps-5 res-width">
                                    <h1 data-aos='fade-left' data-aos-duration='1000' className='animate__animated animate__fadeInRight animated__slower'>Sale 20% Off</h1>
                                        <h5 data-aos='fade-left' data-aos-duration='1000' className='slider-header  animate__animated animate__fadeInLeft animated__slower'>Everything</h5>
                                        <p className=''>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?...</p>
                                        <Link data-aos='fade-left' data-aos-duration='1000' to="/products"><button className='btn btn-pink slide-btn rounded-pill animate__animated animate__bounceInDown animated__slower'>Shop Now</button></Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-center">
                                    <img className='banner-2 p-4 img-fluid animate__animated animate__bounceInUp animated__slower' src={bannerImgThree} alt="fisino" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="book py-3">
                <div className="container">
                    <div data-aos='zoom-in' data-aos-duration="2000" className="w-75 mx-auto hero text-center">
                        <h3>Why Shop With Us</h3>
                        <div className="row py-5">
                            <div className="col-4">
                            <div class="card cardx" >
                            <i class="bi bi-truck x-icon"></i>
                            <div class="card-body">
                                <h5 className='text-white fw-bold'>Fast Delivery</h5>
                                <p className='text-white'>Some quick example text to build ...</p>
                            </div>
                            </div>
                            </div>
                            <div className="col-4">
                         <div class="card cardx">
                         <i class="bi bi-cart-check x-icon"></i>
                            <div class="card-body">
                            <h5 className='text-white fw-bold'>Free Shiping</h5>
                                <p className='text-white'>Some quick example text to build ...</p>
                            </div>
                            </div>
                            </div>
                            <div className="col-4">
                            <div class="card cardx" >
                            <i class="bi bi-gift x-icon"></i>
                                <div class="card-body">
                                <h5 className='text-white fw-bold'>Free Offer</h5>
                                    <p className='text-white'>Some quick example text to build ...</p>
                                </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="product-top-section">
                <div className="container">
                    <h2 className='text-center py-4 line'>TOP PRODUCTS</h2>
                    <div className="row row-cols-1 row-cols-lg-3 g-4 py-5">
                        {
                          productall.map( (product,i)=>  <div key={i} className="card h-100 border-0 rounded-4  px-3 " data-aos="fade-up" data-aos-duration='2000'>
                          <div className="card-img-top  shadow-lg  ">
                              <img src={product.img} alt='' />
                              <div className="cart-order mb-5">
                                  
                                 
                                  <Link to='/products' data-aos='fade-left' data-aos-duration='1000' ><button className='btn btn-disign  px-4'>Shop Now</button></Link>
                                 
                              
                         
          
                              </div>
                          </div>
                          <div className="card-body cardcolor ">
                              <h5 className="card-title">{product.name}</h5>
                              
                               
                              
                                
                                <p className="card-text text-secondary"><b>Category:</b>{product.category}</p>
                                <p className="card-text text-success "><b>Price:</b> $ <span className='text-danger'>{product.price}</span> </p>
                            
                              
                               
                          </div>
                      </div>
                            )
                        }
                    </div>
                    <Link to='/products' className='w-100 mx-auto text-center d-block pb-5'><button className='btn btn-pink text-white btn-200px rounded-pill'>See All Products</button></Link>

                </div>
            </div>
            <div className="bgg">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-6 ">
                            <img className='img-fluid' src={man} alt="" />
                        </div>
                        <div className="col-6 pt-5 px-5">
                            <div className="pt-5">
                                <div className="pt-5">
                                <h1 className='text-color '>#NewArrival</h1>
                            <p className='pt-4 pb-2'>
                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                     </p>
                     <Link data-aos='fade-left' data-aos-duration='1000' to="/products"><button className='btn btn-pink  slide-btn rounded-pill animate__animated animate__bounceInDown animated__slower'>Shop Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="add-section py-3">
                    <div className="row g-3">
                        <div className="col-12 col-lg-6">
                            <div data-aos='fade-down' data-aos-duration='2000' className="women">
                                <h1>New <br />Novelty</h1>
                                <p>--- 20% OFF FIRST ORDER</p>
                                <Link to='/products' className='text-dark fw-semibold'>Show Now</Link>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <div data-aos='fade-up' data-aos-duration='2000' className="men">
                                <h1>Basic <br />For Men</h1>
                                <p>--- 20% OFF FIRST ORDER</p>
                                <Link to='/products' className='text-dark fw-semibold'>Show Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos='zoom-in' data-aos-duration='2000' className="newslater">
                    <h2 className='text-center'>NEWSLETTER</h2>
                    <h5 className="text-secondary text-center pb-4">Join now and get 10% off your next purchase!</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="sale-section">
                <div data-aos='zoom-in' data-aos-duration='2000' className="container">
                    <h1>There's a <b>sale</b>.</h1>
                    <Link to='/products'><button className='btn btn-pink rounded-pill btn-200px text-white'>Explore Now</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Home;