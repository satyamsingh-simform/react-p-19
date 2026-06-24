import { useRef } from "react"
import DineoutOption from "./dineout/DineoutOption"
import FoodOption from "./food/FoodOption"
import { Footer } from "./Footer"
import GroceryOption from "./grocery/GroceryOption"
import Header from "./Header"

export const Home = () => {
  const searchRef=useRef<HTMLInputElement|null>(null)
  return (
    <div>
        <Header searchRef={searchRef}/>
        <div>
          <FoodOption/>
          <GroceryOption/>
          <DineoutOption/>
        </div>
        <Footer searchRef={searchRef}/>
    </div>
  )
}
