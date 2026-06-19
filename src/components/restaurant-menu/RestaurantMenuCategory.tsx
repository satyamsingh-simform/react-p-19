import { useState } from "react"
import type { MenuCategory } from "../../utils/restMenuType";
import RestaurantMenuCategoryCard from "./RestaurantMenuCategoryCard";

type RestaurantMenuCategoryProps={
    menuItems:MenuCategory,
    foodselected:"veg"|'nonveg'|null,
}

export default function RestaurantMenuCategory({menuItems,foodselected}:RestaurantMenuCategoryProps){
    const [isOpen, setIsOpen] = useState(true);
    
    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <RestaurantMenuCategory key={items?.title} menuItems={items} foodselected={foodselected}></RestaurantMenuCategory>)
                }
            </div>
            </div>
        )
    }

   
    if(!isOpen){
        return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>   
        ) 
    }
    

    if(foodselected==='veg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><RestaurantMenuCategoryCard key={items?.card?.info?.id} restData = {items?.card?.info}></RestaurantMenuCategoryCard>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

    if(foodselected==='nonveg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><RestaurantMenuCategoryCard key={items?.card?.info?.id} restData = {items?.card?.info}></RestaurantMenuCategoryCard>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

   


    return (
       
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><RestaurantMenuCategoryCard key={items?.card?.info?.id} restData = {items?.card?.info}></RestaurantMenuCategoryCard>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        
    )
}