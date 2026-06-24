import { groceryData } from "../../../utils/groceryData";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){
    
    return(
        <section className="flex flex-col container mx-auto px-40 mb-30 font-bold text-2xl text-gray-900">
            <h1 className="mb-10">Shop groceries on Instamart</h1>
            <div className="flex flex-nowrap overflow-x-auto gap-10">
                {groceryData.map((groceryItem)=><GroceryCard key={groceryItem.id} groceryItem={groceryItem}/>)}
            </div>
        </section>
    )
}