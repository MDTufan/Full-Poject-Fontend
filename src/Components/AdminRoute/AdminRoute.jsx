
import { useContext } from "react";
import { WebController } from "../../ParentContext/Context";
import UserAdmin from "../Hooks/UserAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({ children }) => {
    const {userInfo, loader } = useContext(WebController);
    const [isAdmin, isAdminLoading] = UserAdmin(userInfo?.email)
    const location = useLocation()

    if (loader|| isAdminLoading) {
        return <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
    }

    if (userInfo && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>

};

export default AdminRoute;
