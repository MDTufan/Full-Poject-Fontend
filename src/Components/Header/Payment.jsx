import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking=useLoaderData();
    console.log(booking);
    const {username,email,name, price,phone}=booking;
  return (
    <div>
     <div className="container">
        <div className="row">
            <div className="col-4">
                
            </div>
            <div className="col-8 ">
                <h1 className=''>Payment For <b> {name}</b></h1>
                <p>Plasse pay  <b> ${price}  </b>for Booking on Your Porduct.  </p>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Payment;
