import { useAppSelector } from "../../hooks/useStoreType";

export const Cart = () => {
  const { cartFood } = useAppSelector((store) => store.cart);

  const grandTotal = cartFood.reduce(
    (acc, food) => acc + (food.price ? food.price/ 100 : food.defaultPrice ? food.defaultPrice/ 100 : 0) * food.quantity,
    0,
  );
  const totalItems = cartFood.reduce((acc, food) => acc + food.quantity, 0);

  return (
    <div className="bg-white h-screen w-400 m-auto">
      <h1 className="text-gray-900 text-center p-5 text-3xl">CART</h1>
      <div className="grid grid-cols-5 bg-gray-200 p-4 font-bold text-black">
        <p>Image</p>
        <p>Item Name</p>
        <p className="pl-10">Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>

      <div>
        {cartFood.map((food) => (
          <div
            key={food.id}
            className="grid grid-cols-5 items-center py-3 border-b border-gray-300 text-black "
          >
            <p>
              <img
                className="h-20 w-30 rounded-2xl"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  food.imageId
                }
                alt="food"
              />
            </p>
            <p>{food.name}</p>
            <p className="pl-10">
              {"\u20B9"}
              {food.price ? food.price/ 100 : food.defaultPrice ? food.defaultPrice/ 100 : null}
            </p>
            <p>{food.quantity}</p>
            <p>
              {"\u20B9"}
              {(food.price ? food.price/ 100 : food.defaultPrice ? food.defaultPrice/ 100 : 0) * food.quantity}
            </p>
          </div>
        ))}
      </div>
      <div className="text-black my-5 p-5 border border-gray-300 rounded-2xl">
        <p>TOTAL ITEMS : {totalItems}</p>
        <p>GRAND TOTAl : {"\u20B9"}{grandTotal}</p>
      </div>
    </div>
  );
};
