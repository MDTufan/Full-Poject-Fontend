import React, { useContext } from 'react';
import { WebController } from '../../ParentContext/Context';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

const MyBooks = () => {
  // console.log(product);

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
             toast.success(` is deleted successfully`);
              
          }
        })
      }
  return (
    <div>
    <div className="container">
        <div className="row">
          
            <div className="col-4">

            </div>
            <div className="col-8">
            <table class="table">
  <thead>
  <h3 className='py-3 text-center'>My Booking</h3>
    <tr>
      
      <th scope="col">#</th>
      <th scope="col">Name:</th>
      <th scope="col">Price:</th>
      
      <th scope="col">Email:</th>
      <th scope="col">Phone:</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    
                {

                  
                            bookings.map((booking, i) => <tr key={i}>
                           <th scope="row">{i + 1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.price}</td>
                            <td>{booking.email}</td>
                            <td>{booking.phone}</td>
                            <td type="button" class="btn btn-danger"><button className='btn  btn-neutral' onClick={()=>handledelite(booking._id)}>Remove User</button></td>
                            
                          </tr>)
                        }

  
    
  </tbody>
</table>
            </div>
        </div>
    </div>
    </div>
  );
}

export default MyBooks;
