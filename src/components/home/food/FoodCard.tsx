import { IMG_URL, type foodData } from "../../../utils/foodData";

type FoodCardProps={
    foodItem:typeof foodData[number];
}

export default function FoodCard(props:FoodCardProps){
    
    return(
        <>
            <div>
                <img className="w-36 h-48"
                src={`${IMG_URL+props.foodItem.imageId}`} 
                alt="food image" />
            </div>
        </>
    )
}