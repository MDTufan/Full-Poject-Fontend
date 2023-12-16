import { useContext } from "react";
import { useForm } from "react-hook-form";
import { WebController } from "../../../ParentContext/Context";
import LottieLoader from "../../Loader/LottieLoader";


const AdminPost = ( ) => {

  const {loader}=useContext(WebController);
  const { register,handleSubmit , formState: { errors } } = useForm();

const handleadminpost=(data)=>{
   console.log(data);
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
          headers: {
            'content-type': 'application/json'
        },
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(data => {
              if (data) {
                  alert("uuuuuuuuuu")
              }
          }).catch(err => console.log("Doctor Error:", err))

        
}


if(loader){
  return <LottieLoader />
}



  return (
    <div>
     <div className="container">
      <div className="row">
        <div className="col-4">

        </div>
        <div className="col-8">
              <form onSubmit={handleSubmit(handleadminpost)}>
              <div class="mb-3">
               
                <div className="row">
                  <div className="col-6">
                  <input type="text"{...register("name")} placeholder="Name " class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-6">
                    
                <input type="text" placeholder="seller" {...register("seller")} class="form-control"  />
                  </div>
                </div>
                
              </div>
              <div class="mb-3">
               
                <div className="row">
                  <div className="col-6">
                  <input type="text" placeholder="Phone" {...register("phone")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-6">
                    
                  <select {...register("category")} placeholder="Category" class="form-select" aria-label="Default select example">
                    <option selected>Category</option>
                    <option value="Electack">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">for</option>
              </select>
                  </div>
                </div>
                
              </div>
            
              
             
              <div class="mb-3">
              

               <div className="row">
                <div className="col-4">
                <input type="text" placeholder="Price" {...register("price")} class="form-control"  />
                </div>
                <div className="col-4">
                <input type="text" placeholder="stock" {...register("stock")} class="form-control"  />
                </div>
                <div className="col-4">
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
      </div>
     </div>
    </div>
  );
}

export default AdminPost;
