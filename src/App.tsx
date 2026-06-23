import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "./pages/Login"
import { useAppDispatch, useAppSelector } from "./hooks/useStoreType"
import { authCheck } from "./features/auth-thunk/AuthSlice"
import { useEffect } from "react"
import { RestaurantOptions } from "./components/restaurant-details/RestaurantOptions"
import { RestaurantMenu } from "./components/restaurant-menu/RestaurantMenu"
import { PublicRoute } from "./routes/PublicRoute"
import { ProtectedRoute } from "./routes/ProtectedRoute"

export const App = () => {

  const dispatch=useAppDispatch();
  const { loading } = useAppSelector((store) => store.auth);

  useEffect(()=>{
    const token=JSON.parse(localStorage.getItem("TOKEN:")!);
    console.log('token-->',token);
    
    if(token){
      dispatch(authCheck(token))
    }
  },[])

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/restaurant" element={<RestaurantOptions/>}></Route>
          <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
        </Route>
        </Routes>
    </BrowserRouter>
  )
}
