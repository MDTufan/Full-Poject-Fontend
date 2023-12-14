

import { Outlet } from "react-router-dom"
import Dashbord from "./Dashbord"

const Desh = () => {
  
  return (
    <div>
       <Dashbord />
          <Outlet />
    </div>
  )
}

export default Desh