import { useEffect, useState } from "react"
import { Header } from "../header/Header"
import Shimmer from "../Shimmer"
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreType"
import { fetchRestData } from "../../features/restdata-thunk/RestdataSlice"
import { RestaurantCard } from "./RestaurantCard"


export const RestaurantOptions = () => {
  const [sortBy,setSortBy]=useState('')
  const dispatch=useAppDispatch();
  const {restaurantData}=useAppSelector(store=>store.restSlice);

  useEffect(()=>{
    dispatch(fetchRestData());
  },[])

  if(!restaurantData){
    return <Shimmer/>
  }

  const sortedRestaurants=[...restaurantData].sort((a,b)=>{
    if(sortBy==="rating"){
        return b.info.avgRating-a.info.avgRating;
    }
    if(sortBy==="delivery"){
        return a.info.sla.deliveryTime-b.info.sla.deliveryTime;
    }
    if(sortBy==="lowToHigh"){
        return (
            Number(a.info.costForTwo.replace(/\D/g,""))-
            Number(b.info.costForTwo.replace(/\D/g,""))
        );
    }
    if(sortBy==="highToLow"){
        return (
            Number(b.info.costForTwo.replace(/\D/g,""))-
            Number(a.info.costForTwo.replace(/\D/g,""))
        );
    }

    return 0;
  });

  return (
    <>
      <Header/>
      <h1 className="w-[90%] m-auto text-3xl font-bold mt-10 ml-42">Restaurants with online food delivery in Delhi</h1>
      <div className="w-30 ml-42">
        <select className="select select-primary rounded-2xl border-gray-500"
          value={sortBy}
          onChange={(e)=>setSortBy(e.target.value)}
        >
          <option value="">sortBy</option>
          <option value="rating">Rating</option>
          <option value="delivery">Fast Delivery</option>
          <option value="lowToHigh">Cost: Low to High</option>
          <option value="highToLow">Cost: High to Low</option>
        </select>
      </div>
      
      <div className="flex flex-col items-center ">
          <div className="flex flex-wrap w-[90%] justify-center mt-20 gap-10 ">
            {
              sortedRestaurants.map((obj)=>(
                <RestaurantCard key={obj.info.id} restDataObj={obj}  />
              ))
            }
          </div>
      </div>
    </>
  )
}
