import { useSelector } from "react-redux"
import type { AuthSliceType } from "../store"

export const Header = () => {
  const {user}=useSelector((store:AuthSliceType)=>store.auth)
  console.log('user-->',user);
  
  return (
    <div className="navbar shadow">
      <div className="flex items-center gap-0.5">
        <span className="">
            <img className="w-10 h-10 border border-gray-300 p-0.5 rounded-[50%]" src={user?.image} alt="profile-pic" />
        </span>
        <span>
          {user?.firstName} {user?.lastName}
        </span>
      </div>
    </div>
  )
}
