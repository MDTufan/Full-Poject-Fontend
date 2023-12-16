import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const YourPost = () => {
    const { register,handleSubmit , formState: { errors } } = useForm();

const handlepost=(data)=>{
    
   const img = data.img[0];
   const formData = new FormData();

        formData.append('name', data.name)
      
        formData.append('seller', data.seller)
        formData.append('phone', data.phone)
        formData.append('category', data.category)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('ratings', data.ratings)
        formData.append('img', img)
        console.log(formData);


        fetch('https://full-poject-backend.vercel.app/ProductAll', {
          method: 'POST',
          
          body: formData
      })
          .then(res => res.json())
          .then(data => {
              if (data) {
                  toast.success("Your Post Successfully")
              }
          }).catch(err => console.log("Doctor Error:", err))
  
}

  return (
    <div className="register  py-5">
           <div className="container mt-5">
      <div className="row vvx mt-5">
        <div className="col-2">

        </div>
        <div className="col-8 bg-info p-5">
              <form onSubmit={handleSubmit(handlepost)}>
              <div class="mb-3">
               
                <div className="row">
                  <div className="col-12 col-md-6 col-sm-6">
                  <input type="text"{...register("name")} placeholder="Name " class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-12 col-md-6 col-sm-6">
                    
                <input type="text" placeholder="seller" {...register("seller")} class="form-control"  />
                  </div>
                </div>
                
              </div>
              <div class="mb-3">
               
                <div className="row">
                  <div className="col-12 col-md-6 col-sm-6">
                  <input type="text" placeholder="Phone" {...register("phone")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-12 col-md-6 col-sm-6">
                    
                  <select {...register("category")} placeholder="Category" class="form-select" aria-label="Default select example">
                    <option value="Other" selected>Category</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Jobs">Jobs</option>
                    <option value="Trade and Industry">Trade and Industry</option>
                    <option value="Other">Other</option>
              </select>
                  </div>
                </div>
                
              </div>
            
              
             
              <div class="mb-3">
              

               <div className="row">
                <div className="col-12 col-md-4 col-sm-4">
                <input type="text" placeholder="Price" {...register("price")} class="form-control"  />
                </div>
                <div className="col-12 col-md-4 col-sm-4">
                <input type="text" placeholder="stock" {...register("stock")} class="form-control"  />
                </div>
                <div className="col-12 col-md-4 col-sm-4">
                <input type="text" placeholder="ratings" {...register("ratings")} class="form-control"  />
                </div>
               </div>
                
              </div>
            
             
              <div class="mb-3">
                <label for="formFile" class="form-label">Chose Image</label>


                <input class="form-control" {...register("img")} type="file" id="formFile" placeholder="Chose images" />
                
              </div>
  
              <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </div>
        <div className="col-2">

        </div>
      </div>
     </div>
        </div>
  );
}

export default YourPost;
