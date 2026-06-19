import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { Login } from "./pages/Login"
import { Restaurant } from "./components/Restaurant"
import { useAppDispatch, useAppSelector } from "./hooks/useStoreType"
import { authCheck } from "./features/auth-thunk/AuthSlice"
import { useEffect } from "react"

export const App = () => {
  const {isAuthenticated}=useAppSelector(store=>store.auth)

  const dispatch=useAppDispatch();

  useEffect(()=>{
    const token=JSON.parse(localStorage.getItem("TOKEN:")!);
    console.log('token-->',token);
    
    if(token){
      dispatch(authCheck(token))
    }
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated?<Navigate to='/restaurant'/>:<Login/>}></Route>
        <Route path="/restaurant" element={isAuthenticated?<Restaurant/>:<Navigate to='/'/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
