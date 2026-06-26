import restaurantClient from "./restaurantClient";
import type { RestData } from "../utils/restdataThunkType";
import type { RestMenu } from "../utils/restMenuType";

export async function getRestaurantData():Promise<RestData[]>{
    const response=await restaurantClient('/restaurants?lat=28.7040592&lng=77.10249019999999');

    return response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
}

export async function getRestaurantMenu(id:string):Promise<RestMenu>{
    const response=await restaurantClient(`/menu?lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`);

    return response.data.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
}