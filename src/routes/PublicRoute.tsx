import { Navigate, Outlet } from "react-router"
import { useAppSelector } from "../hooks/useStoreType"

export const PublicRoute = () => {
    const {isAuthenticated}=useAppSelector(store=>store.auth)
  return (
    <div>
        {
            !isAuthenticated
            ?
                <Outlet/>
            :
                <Navigate to='/restaurant'/>
        }
    </div>
  )
}
