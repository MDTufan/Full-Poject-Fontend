import { Link } from "react-router-dom"
import"./Dashbord.css"
import { useContext } from "react";
import { WebController } from "../ParentContext/Context";
import UserAdmin from "./Hooks/UserAdmin";


const Dashbord = () => {
  const { userInfo } = useContext(WebController);
  const [isAdmin] = UserAdmin(userInfo?.email)
  console.log(isAdmin);
 
  return (
    <div>
        <div className="row">
            <div className="col-2">
            <div className="xxx">
            <ul>
                <li><button type="button" class="btn ggbb mt-4"><Link to="/deshbord/mybooks">My Booking</Link ></button></li>
                {
                  isAdmin && <div>
                    <li> <button type="button" class="btn ggbb mt-4"><Link  to="/deshbord/usersall">All Users</Link ></button> </li>
                    <li> <button type="button" class="btn ggbb mt-4"><Link  to="/deshbord/adminpost">AdminPost</Link ></button> </li>
                <li> <button type="button" class="btn ggbb mt-4"><Link  to="/deshbord/part3">part3</Link ></button></li>
                <li> <button type="button" class="btn ggbb mt-4"><Link  to="/">Go HomePage</Link ></button></li>
                  </div>
                }
                
            </ul>
        </div>
            </div>
            <div className="col-10">
            <h1 className="p-3 text-center bg-info text-black xxx-xxx">This is React-Router area</h1>
            </div>
        </div>
    </div>
  )
}

export default Dashbord