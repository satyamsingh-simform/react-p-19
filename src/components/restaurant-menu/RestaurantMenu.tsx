import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreType"
import { fetchRestMenuData } from "../../features/rest-menu-thunk/RestaurantMenuSlice";
import { useParams,useSearchParams } from "react-router";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { Header } from "../header/Header";
import { MenuSkeleton } from "../skeleton/MenuSkeleton";

export const RestaurantMenu = () => {
    const [searchParams,setSearchParams]=useSearchParams();
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
        return <MenuSkeleton/>
    }
    
    const search=searchParams.get('search')||'';
    const filterData=RestaurantMenu.filter((items)=> 'title' in items?.card?.card);

    return (
        <>
        <Header/>
        <div className="w-[50%] mx-auto flex flex-wrap text-black">
            <div className="w-full mt-10">
                <input type="text" placeholder="Search food..."
                    className="w-full border border-gray-300 rounded-2xl p-3"
                    value={search}
                    onChange={(e)=>setSearchParams({search:e.target.value})}
                />
            </div>
            <div className="w-full mt-10 flex gap-4">
                <button className={`text-black border p-1 border-gray-300 rounded-2xl w-20 hover:cursor-pointer ${selected=='veg'?'bg-green-400':'bg-white'}`} onClick={()=>setSelected(selected=='veg'?null:'veg')}>Veg</button>
                <button className={`text-black border p-1 border-gray-300 rounded-2xl w-20 hover:cursor-pointer ${selected=='nonveg'?'bg-red-400':"bg-white"}`} onClick={()=>setSelected(selected=='nonveg'?null:'nonveg')}>NonVeg</button>
            </div>
            <div className='w-full mt-7 mb-3 text-gray-300'><hr /></div>
        
            {
              filterData.map((menuItems)=><RestaurantMenuCategory key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected} search={search}></RestaurantMenuCategory>)
            }
        </div>
        </>
    )
}
