import { useContext } from "react";
import { WebController } from "../../ParentContext/Context";
import { Link } from "react-router-dom";


const Modal = ({productid,setproductid,product}) => {

 
   const{userInfo}=useContext(WebController);
  
  console.log(productid);

    const BookingProduct=(event)=>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      // const stock = form.stock.value;
      // const price = form.price.value;
      // const username = form.username.value;
      const email = form.email.value;
      const phone = form.phone.value;

      const booking={
        phone,name
      }
console.log(phone,name,email);
      fetch('http://localhost:3000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)


        })
        .then(res => res.json())
        .then(result=>{

          if(result.acknowledged){
            
            alert("add bookings SuccessFully");
           form.reset();
            
          }
          // console.log(result);
        })

    }
    
  return (
    <div>
    
<button className="btn btn-disign  px-3 " type="button" data-aos='fade-left' data-aos-duration='1000' data-bs-toggle="modal" data-bs-target="#exampleModal">
Shop Now
</button>                   



<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content xx-modal p-5">
    <form onSubmit={BookingProduct}>
  <div className="mb-3">
    
    <input type="text" name="name" value={userInfo?.displayName}   className="form-control"  />
    
  </div>
  <div className="mb-3">
    
    <input type="text" name="email" value={userInfo?.email}  disabled  class="form-control"  />
    
  </div>
  
  {/* <div class="mb-3">
   
    <input type="text"  name="username" defaultValue={userInfo?.displayName} disabled class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div> */}
  {/* <div class="mb-3">
   
    <input type="email" name="email" defaultValue={userInfo?.email}  disabled class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div> */}
  <div class="mb-3">
   
    <input type="text" name="phone"   placeholder='phone Number'  class="form-control"  />
    
  </div>
  
  
  <button type="submit" className="btn btn-disign  px-5 ">Submit</button>
</form>
    </div>
  </div>
</div>
    </div>
  );
}

export default Modal;
