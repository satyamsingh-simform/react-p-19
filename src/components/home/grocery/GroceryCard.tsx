import { IMG_URL } from "../../../utils/foodData"
import type { groceryData } from "../../../utils/groceryData"

type GroceryCardProps={
    groceryItem:typeof groceryData[number]
}
export default function GroceryCard(props:GroceryCardProps){
    return(
        <div className="flex-none">
            <img className="w-36 h-48"
            src={`${IMG_URL+props.groceryItem.imageId}`} 
            alt="food image" />
            <span className="w-33 text-xl font-bold flex flex-wrap text-center">
                {props.groceryItem.description}
            </span>
        </div>
    )
}