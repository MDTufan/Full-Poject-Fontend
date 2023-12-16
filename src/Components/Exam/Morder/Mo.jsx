import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { WebController } from '../../../ParentContext/Context';

const Mo = ({product,setproductid,productid}) => {
    console.log(productid);
    const{userInfo}=useContext(WebController);
    const BookingProduct=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const stock = form.stock.value;
        const price = form.price.value;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
  
        const booking={
          username,email,name,price,phone
        }
  
        fetch('https://full-poject-backend.vercel.app/bookings', {
              method: "POST",
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(booking)
  
  
          })
          .then(res => res.json())
          .then(result=>{
  
            if(result.acknowledged){
              
              toast.success("add ffffffffffffffffffffffffffffffffffffff");
              refetch();
              
            }
            // console.log(result);
          })
  
      }
  return (
    <div className='fff shadow-lg rounded  py-2'>
        <div class="card  bgxinfo border border-warning" >
  <div className="imgall">
  <img src={`data:image/png;base64,${product.img}`} class="card-img-top rounded img-fluid mx-auto" alt="..."/>
  </div>
  <div class="card-body">
  <h3 className="p-2 text-white">{product.name}</h3>
  <div className="row">
    
    <div className="col-6">
        <p className='text-white'>Price:$ {product.price}</p>
    </div>
    <div className="col-6">
        <p className='text-white '>Category: {product.
category}</p>
    </div>

  </div>
  <button className="btn btn-disign  ml-4 ms-auto px-3 " type="button" data-aos='fade-left' data-aos-duration='1000' data-bs-toggle="modal" data-bs-target="#exampleModal"
    onClick={()=>{setproductid(product)}}
    >
        
    Shop Now
    </button>                   
    
    
    
    <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content xx-modal p-5">
        <form onSubmit={BookingProduct}>
      <div className="mb-3">
        
        <input type="text" name="username" value={userInfo?.displayName} disabled  className="form-control"  />
        
      </div>
      <div className="mb-3">
        
        <input type="text" name="email" value={userInfo?.email}  disabled  class="form-control"  />
        
      </div>
      
      <div class="mb-3">
       
        <input type="text"  name="name" value={productid.name}  disabled class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        
      </div>
      <div class="mb-3">
       
        <input type="text"  name="price" value={productid.price}  disabled class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        
      </div>
    
      <div class="mb-3">
       
        <input type="text" name="phone"   placeholder='phone Number'  class="form-control"  />
        
      </div>
      
      
      <button type="submit" className="btn btn-disign  px-5 ">Submit</button>
    </form>
        </div>
      </div>
    </div>
  </div>
</div>
    
   
        </div>
  );
}

export default Mo;
