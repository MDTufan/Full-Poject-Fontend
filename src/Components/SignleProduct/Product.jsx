


import Modal from '../Modal/Modal';



const Product = ({ product,setproductid,productid, refetch}) => {

    const { img, name, price, _id } = product;
    

    return (
        <div className="col">
            <div className="card h-100 border-0 rounded-4" data-aos="fade-up" data-aos-duration='2000'>
                <div className="card-img-top shadow-lg ">
                    <img src={`data:image/png;base64,${img}`} alt={name} />
                    <div className="cart-order shadow-lg">
                       
                        <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn  bg-gradient-to-r from-primary to-secondary text-white"
                        onClick={() => setproductid(product)}
                    > 
                   
                      <Modal product={product}  refetch={ refetch} setproductid={setproductid} productid={productid}/>  
                     
                    
                    </label>
                </div>
               

                    </div>
                </div>
                <div className="card-body cardcolor">
                <h5 className="card-title">{name}</h5>
                              
                               
                              
                                
                              <p className="card-text text-secondary"><b>Category:</b>{product.category}</p>
                              <p className="card-text text-success "><b>Price:</b> $ <span className='text-danger'>{price}</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Product;