import { useEffect, useState } from "react";


const UserAdmin = (email) => {
    
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:3000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false)
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading]
}

export default UserAdmin;
