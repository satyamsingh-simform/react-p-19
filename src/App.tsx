import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "./pages/Login"
import { useAppDispatch, useAppSelector } from "./hooks/useStoreType"
import { authCheck, logout } from "./features/auth-thunk/AuthSlice"
import { useEffect } from "react"
import { RestaurantOptions } from "./components/restaurant-details/RestaurantOptions"
import { RestaurantMenu } from "./components/restaurant-menu/RestaurantMenu"
import { PublicRoute } from "./routes/PublicRoute"
import { ProtectedRoute } from "./routes/ProtectedRoute"
import { Cart } from "./components/cart/Cart"
import { Home } from "./components/home/Home"

export const App = () => {

  const dispatch=useAppDispatch();
  const { loading } = useAppSelector((store) => store.auth);

  useEffect(()=>{
    const token=JSON.parse(localStorage.getItem("TOKEN:")!);
    if(token){
      dispatch(authCheck(token))
    }
    else{
        dispatch(logout());
    }
  },[])

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/restaurant" element={<RestaurantOptions/>}></Route>
          <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
        </Routes>
    </BrowserRouter>
  )
}
