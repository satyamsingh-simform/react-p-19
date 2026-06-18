import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { Login } from "./pages/Login"
import { Restaurant } from "./components/Restaurant"
import { useSelector } from "react-redux"
import type { AuthSliceType } from "./store"

export const App = () => {

  const {isAuthenticated}=useSelector((store:AuthSliceType)=>store.auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated?<Navigate to='/restaurant'/>:<Login/>}></Route>
        <Route path="/restaurant" element={isAuthenticated?<Restaurant/>:<Navigate to='/'/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
