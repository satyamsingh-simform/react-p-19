import DineoutOption from "./dineout/DineoutOption"
import FoodOption from "./food/FoodOption"
import { Footer } from "./footer"
import GroceryOption from "./grocery/GroceryOption"
import Header from "./Header"

export const Home = () => {
  return (
    <div>
        <Header/>
        <FoodOption/>
        <GroceryOption/>
        <DineoutOption/>
        <Footer/>
    </div>
  )
}
