import { Link } from "react-router"
import type { RestData } from "../../features/restdata-thunk/RestdataSlice"

type RestaurantCardProps={
    restDataObj:RestData
}

export const RestaurantCard = ({restDataObj}:RestaurantCardProps) => {
  return (
    <Link to={`/city/delhi/`+restDataObj.info.id}>
        <div className="w-85 mb-2 transform transition duration-200 hover:scale-95 hover:cursor-pointer">
            <img
              className="w-full h-55 object-cover rounded-xl"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                restDataObj?.info?.cloudinaryImageId
              }
            ></img>
            <div className="w-[95%] mx-auto mt-3">
              <div className="font-bold text-lg ">{restDataObj?.info?.name}</div>
              <div className="flex items-center gap-0 ">
                <svg
                  className="w-6 h-6 fill-green-600"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
                </svg>
                <span className="text-lg">{restDataObj?.info?.avgRating}</span>
                <span className="text-lg font-semibold ml-2">
                  {restDataObj?.info?.sla?.slaString} 
                </span>
              </div>

              <div className="text-gray-600 text-sm mt-1 w-75 overflow-hidden whitespace-nowrap text-ellipsis">
                {restDataObj?.info?.cuisines.join(" ")}
              </div>
              <div className="text-gray-600 text-sm">
                {restDataObj?.info?.locality}
              </div>
            </div>
        </div>
    </Link>
  )
}
