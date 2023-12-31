import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router/Router';
import Home from './Components/Home/Home';
import 'animate.css';
import Products from './Components/ProductsPage/Products';


import Message from './Components/OrderConfirmMessage/Message';
import Coming from './Components/ComingSoonPage/Coming';
import Register from './Components/Account/Register/Register';
import Login from './Components/Account/Login/Login';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import Desh from './Components/Desh';

import UsersAll from './Components/Header/UsersAll';
import MyBooks from './Components/Header/MyBooks';
import AdminPost from './Components/Header/AdminPost/AdminPost';
import Blog from './Components/Blog/Blog';
import YourPost from './Components/YourPost/YourPost';
import Orders from './Components/Orders/Orders';

import PPP from './Components/Exam/Products/PPP';
import Payment from './Components/Header/Payment';













function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router></Router>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('products.json')
          }
        },
        // {
        //   path: '/products',
        //   element:<PrivateRouter> <Products></Products></PrivateRouter>,
          
        // },
        {
          path: '/products',
          element: <PPP />,
          
        },
        {
          path: '/blog',
          element:<Blog />
          
        },
        {
          path: '/orders',
          element:<Orders />
          
        },
        {
          path: '/addpost',
          element:<YourPost />
          
        },
        
        {
          path: '/account',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        
       
        {
          path: '/complete',
          element: <Message></Message>
        },
        
        

        {
          path: '*',
          element: <Coming></Coming>
        }
      ]
    },
    {
      path: "/deshbord",
      element: <PrivateRouter><Desh /></PrivateRouter>,
      children:[
        {
          path:"/deshbord/mybooks",
          element: <MyBooks />
        },
        {
          path:"/deshbord/usersall",
          element: <UsersAll />
        },
        {
          path:"/deshbord/adminpost",
          element: <AdminPost />
        },
       
        {
          path:"/deshbord/payment/:id",
          loader:({params})=>fetch(`http://localhost:3000/bookings/${params.id}`),
          element: <Payment />
        },
      ]
    }
   
    
  ]);


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )


}

export default App
