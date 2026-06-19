import { logout } from "../../features/auth-thunk/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreType";

export const Header = () => {
  const {user}=useAppSelector(store=>store.auth);
  const dispatch=useAppDispatch()
  
  function handleLogout(){
    localStorage.removeItem("TOKEN:");
    dispatch(logout());
  }

  return (
    <div className="navbar shadow flex justify-between px-5">
      <div className="flex items-center gap-0.5">
        <span className="">
            <img className="w-10 h-10 border border-gray-300 p-0.5 rounded-[50%]" src={user?.image} alt="profile-pic" />
        </span>
        <span>
          {user?.firstName} {user?.lastName}
        </span>
      </div>
      <div>
        <button
          onClick={handleLogout}
         className="btn btn-primary">Logout</button>
      </div>
    </div>
  )
}
