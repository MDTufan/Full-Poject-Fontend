/* eslint-disable no-unused-vars */
import React, {  useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Product from '../SignleProduct/Product';
// import Home from '../Home/Home';
import { useQuery } from 'react-query';
import LottieLoader from '../Loader/LottieLoader';



const Products = () => {

    // const[productall,setproductall]=useState([]);
    const[productid,setproductid]=useState("");
    // console.log(productid);

    const { data: productall = [], refetch, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/ProductAll`);
            const data = await res.json();
            return data
        }
    })
 
    if(isLoading){
        return <LottieLoader />
    }

    // useEffect(()=>{
    //     // window.scrollTo(0, 0);
    //     fetch('http://localhost:3000/ProductAll')
    //     .then(res=>res.json())
    //     .then(data =>{
    //        setproductall(data);
            
    //     })

    // },[])
    // const products = useLoaderData();
    
    return (
        <div className='products'>
            <div className="products-header">
                <h1 data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='pt-5 text-center'>All Products</h1>
                <h4 data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='text-center pb-5'>Choose Your Best Products Here</h4>
            </div>
            <div className="container">
                <div className='row row-cols-1 row-cols-lg-3 g-4 py-5'>
                    {
                      productall.map(product => <Product 
                        key={product._id} 
                        product={product} 
                        setproductid={setproductid}
                       productid={productid}
                        
                        >
                   
                        </Product>
                        
                        )
                    }

                        
                </div>
            </div>
        </div>
    );
};

export default Products;