import React, { useContext } from 'react';
import { WebController } from '../../ParentContext/Context';
import OrderRow from './OrderRow';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { tabTitle } from '../../../Title';

const Orders = () => {
  tabTitle("React App | orders");

    const { userInfo } = useContext(WebController)
    const url = `https://full-poject-backend.vercel.app/bookings?email=${userInfo?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', userInfo?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })

    const handledelite=(id)=>{
      
        const url = `https://full-poject-backend.vercel.app/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
               toast.success(` Deleted successfully`);
                
            }
          })
        }


    // const handleDelete = id => {
    //     const process = window.confirm('Are you wan to to delete')
    //     if (process) {
    //         fetch(`https://fisino-server.vercel.app/orders/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('delete successfull');
    //                     const remaining = orders.filter(or => or._id !== id);
    //                     setOrders(remaining)
    //                 }
    //             })
    //     }

    // }

    // const handleStatusUpdate = id => {
    //     fetch(`https://fisino-server.vercel.app/orders/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify({ status: "Approved" })

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 const statusRemaining = orders.filter(odr => odr._id !== id);
    //                 const approving = orders.find(odr => odr._id === id);
    //                 approving.status = "Approved";
    //                 const newOrders = [approving, ...statusRemaining]
    //                 setOrders(newOrders)
    //             }
    //             console.log(data);
    //         })
    // }



    return (
        // <div className='my-5 py-5 container'>

        //     <h2 className='mt-5'>See all Orders</h2>
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th scope="col">Name</th>
        //                 <th scope="col">Poduct Name</th>
        //                 <th scope="col">Price</th>
        //                 <th scope="col">Phone</th>
        //                 <th scope="col">Action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 orders.map(order => <OrderRow
        //                     key={order._id}
        //                     order={order}
        //                     handleDelete={handleDelete}
        //                     handleStatusUpdate={handleStatusUpdate}
        //                 ></OrderRow>)
        //             }



        //         </tbody>
        //     </table>

        // </div>
        <div>
        <div className="container   mt-5">
            <div className="row my-5">
              
                
                <div className="col-12 mt-5">
                <table class="table">
      <thead>
      <h3 className='py-3 text-center'>Your Order</h3>
        <tr >
         
          <th  scope="col">#</th>
          <th scope="col">Product Name:</th>
          <th scope="col">Price:</th>
          <th scope="col">User Name:</th>
          
          <th scope="col">Email:</th>
          <th scope="col">Phone:</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        
                    {
    
                      
                                bookings.map((booking, i) => <tr key={i}>
                               <th scope="row ">{i + 1}</th>
                                <td >{booking.name}</td>
                                <td>{booking.price}</td>
                                <td>{booking.username}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td type="button" class="btn xxbtn btn-danger"><button className='btn  btn-neutral' onClick={()=>handledelite(booking._id)}>Remove User</button></td>
                                
                              </tr>)
                            }
    
      
        
      </tbody>
    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Orders;