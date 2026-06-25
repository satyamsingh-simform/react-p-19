import { BrowserRouter, Route, Routes } from "react-router"
import { RestaurantOptions } from "./components/restaurant-details/RestaurantOptions"
import { RestaurantMenu } from "./components/restaurant-menu/RestaurantMenu"
import { Cart } from "./components/cart/Cart"
import { Home } from "./components/home/Home"

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/restaurant" element={<RestaurantOptions/>}></Route>
          <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
