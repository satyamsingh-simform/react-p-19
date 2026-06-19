import { useEffect } from "react"
import { Header } from "../header/Header"
import Shimmer from "../Shimmer"
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreType"
import { fetchRestData } from "../../features/restdata-thunk/RestdataSlice"
import { RestaurantCard } from "./RestaurantCard"


export const RestaurantOptions = () => {
  const dispatch=useAppDispatch();
  const {restaurantData}=useAppSelector(store=>store.restSlice);

  useEffect(()=>{
    console.log('rest-->',restaurantData);
    dispatch(fetchRestData());
  },[])

  if(!restaurantData){
    return <Shimmer/>
  }

  return (
    <>
      <Header/>
      <h1 className="w-[90%] m-auto text-3xl font-bold mt-10 ml-42">Restaurants with online food delivery in Delhi</h1>
      <div className="flex flex-col items-center ">
          <div className="flex flex-wrap w-[90%] justify-center mt-20 gap-10 ">
            {
              restaurantData.map((obj)=>(
                <RestaurantCard key={obj.info.id} restDataObj={obj}  />
              ))
            }
          </div>
      </div>
    </>
  )
}


/*
//https://swiggy-backend-rosy.vercel.app/api/menu?lat=28.7040592&lng=77.10249019999999&restaurantId=${id}
//https://swiggy-backend-rosy.vercel.app/api/restaurants?lat=28.7040592&lng=77.10249019999999
*/