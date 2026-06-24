import FoodCard from "./FoodCard";
import { foodData } from "../../../utils/foodData";

export default function FoodOption(){
    return(
        <section className="flex flex-col container px-40 mt-30 mb-30 font-bold text-2xl text-gray-900">
            <h1>Order our best food options</h1>
            <div className="flex flex-wrap">
                {foodData.map((foodItem)=><FoodCard key={foodItem.id} foodItem={foodItem}/>)}
            </div>
        </section>
    )
}