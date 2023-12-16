import React from 'react';
import { useQuery } from 'react-query';

const UsersAll = () => {

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await fetch('https://full-poject-backend.vercel.app/users');
        const data = await res.json();
        return data
    }

   
})


const handleMakeAdmin = (id) => {

  fetch(`https://full-poject-backend.vercel.app/users/admin/${id}`, {
      method: 'PUT'
  })
      .then(res => res.json())
      .then(data => {
         
          if (data.modifiedCount > 0) {
             alert('Make Admin Successfull');
              refetch()
          }
      })
}

const handledelite=(id)=>{
console.log(id);
const url = `https://full-poject-backend.vercel.app/users/${id}`;
fetch(url, {
    method: 'DELETE'
})
.then(res => res.json())
.then(data => {
    if(data.deletedCount > 0){
        alert(` is deleted successfully`);
        
    }
  })

}



  return (
    <div>
    <div className="container">
      <h1 className=" text-center"> All User:  {users.length}</h1>
      <div className="row">
        <div className="col-4">
          
        </div>
        <div className="col-8">
        <table class="table">
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">Name:</th>
  
  <th scope="col">Email:</th>
  <th scope="col">Admin:</th>
  <th scope="col">Delete:</th>
</tr>
</thead>
<tbody>

{
                       users.map((user, i) => 
                        <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn  btn-neutral'>Make Admin</button>}</td>
                        <td type="button" class="btn btn-danger"><button className='btn  btn-neutral' onClick={()=>handledelite(user._id)}>Remove User</button></td>
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
            
export default UsersAll;
