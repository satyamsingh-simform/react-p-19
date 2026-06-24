import { useAppDispatch, useAppSelector } from "../../hooks/useStoreType";
import type { FoodInfo } from "../../utils/restMenuType"
import { SquareStop } from 'lucide-react';
import {addItems,IncrementItems,DecrementItems} from '../../features/cart-slice/CartSlice'
type RestaurantMenuCategoryCardProps={
    restData:FoodInfo,
}

export default function RestaurantMenuCategoryCard({restData}:RestaurantMenuCategoryCardProps){
    const cartItem=useAppSelector(
        store=>store.cart.cartFood.find(
            item=>Number(item.id)==Number(restData.id)
        )
    );
    const count=cartItem?.quantity || 0;
    
    const dispatch=useAppDispatch();

    function handleAddItems(){
        dispatch(addItems(restData));
    }
    function handleIncItems(){
        dispatch(IncrementItems(restData));
    }
    function handleDecItems(){
        dispatch(DecrementItems(restData));
    }

    return (
        <>
    <div className="flex justify-between w-full mb-10">
        <div className="w-[70%]">
            <SquareStop className="w-4 h-4 text-[#1BA672]" />
            <p className="text-lg text-gray-700 font-bold">
                {restData?.name}
            </p>

            <p className="font-semibold mb-1">
                {"\u20B9"}
                {
                    restData?.price
                    ?
                        restData?.price / 100
                    :
                        restData?.defaultPrice? restData?.defaultPrice/100 : null
                }
            </p>

            <span className="text-[#1BA672] font-bold text-[13.5px]">
                {"\u2605 "}
                {restData?.ratings?.aggregatedRating?.rating}
            </span>

            <span className="font-semibold text-[13.5px] text-gray-500">
                ({restData?.ratings?.aggregatedRating?.ratingCountV2})
            </span>

            <p className="truncate-2-lines mt-2 text-[#02060C99] text-[16px] font-semibold">
                {restData?.description}
            </p>
        </div>

        <div className="w-[25%] relative">
            <img
                className="w-39 h-36 object-cover rounded-2xl"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +restData?.imageId}
                alt={restData?.name}
            />
            {
            count===0
            ?(<button className='absolute top-30 left-4.5 px-10 py-1.5 bg-white rounded-lg shadow-md text-[#1BA672] font-bold text-lg hover:cursor-pointer' 
                onClick={()=>handleAddItems()}
                >ADD</button>)
            :(
                  <div className='min-w-30 absolute top-30 left-4.5 px-5 py-1.5 bg-white rounded-lg shadow-md text-[#1BA672] font-bold text-lg flex justify-between '>
                      <button className='hover:cursor-pointer' onClick={()=>handleDecItems()}>-</button>
                      <span>{count}</span>
                      <button className='hover:cursor-pointer' onClick={()=>handleIncItems()}>+</button>
                  </div>
              )
            }
        </div>
    </div>

    <div className="w-full mb-10 text-gray-300">
        <hr />
    </div>
</>

    )
}