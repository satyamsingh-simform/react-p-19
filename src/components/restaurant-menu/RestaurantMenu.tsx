import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreType"
import { fetchRestMenuData } from "../../features/rest-menu-thunk/RestaurantMenuSlice";
import { useParams } from "react-router";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

export const RestaurantMenu = () => {
    const [selected, setSelected] = useState<"veg"|'nonveg'|null>(null);
    const {id}=useParams();
    const dispatch=useAppDispatch();
    const {RestaurantMenu}=useAppSelector(store=>store.restMenu);

    useEffect(()=>{
        if(id){
            dispatch(fetchRestMenuData(id))
        }
    },[])

    if(!RestaurantMenu){
        return <h1>NO data </h1>
    }
    
    const filterData=RestaurantMenu.filter((items)=> 'title' in items?.card?.card);
    console.log('FILTER:',filterData);

    return (
        <div>

        <div className="w-[80%] mx-auto mt-20 mb-20">
        <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="veg"? "bg-green-600": "bg-gray-300"} `} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
        <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==="nonveg"? "bg-red-500": "bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non veg</button>
        </div>
       
        <div className="w-[80%] mx-auto mt-20">
          {
            filterData.map((menuItems)=><RestaurantMenuCategory key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></RestaurantMenuCategory>)
          }
        </div>
        </div>
    )
}
