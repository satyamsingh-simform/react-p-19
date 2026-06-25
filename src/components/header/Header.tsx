import { Link } from "react-router";
import { useAppSelector } from "../../hooks/useStoreType";

export const Header = () => {
  const {count}=useAppSelector(store=>store.cart)

  return (
    <div className="navbar shadow flex justify-between px-5 text-gray-700 sticky top-0 bg-white z-10">
      <Link to='/cart'>
        <button className="btn btn-secondary">
          {
           `CART:${count}`
          }
        </button>
      </Link>
    </div>
  )
}
