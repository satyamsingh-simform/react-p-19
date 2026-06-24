import { Navigate, Outlet } from "react-router"
import { useAppSelector } from "../hooks/useStoreType"

export const ProtectedRoute = () => {
    const {isAuthenticated}=useAppSelector(store=>store.auth)
  return (
    <div>
        {
            isAuthenticated 
            ?
                <Outlet/>   
            :
                <Navigate to='/login' replace/>
        }
    </div>
  )
}
