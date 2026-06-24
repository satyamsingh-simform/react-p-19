import { restaurantsData } from "../../../utils/restaurantData";
import DineoutCard from "./DineoutCard";

export default function DineoutOption(){
    return(
        <section className="flex flex-col container px-40 mt-30 mb-30 font-bold text-2xl text-gray-900">
            <h1 className="mb-10">Discover best restaurants on Dineout</h1>
            <div className="flex flex-nowrap overflow-x-auto gap-10">
                {restaurantsData.map((restItem)=><DineoutCard key={restItem.info.id} restItem={restItem}/>)}
            </div>
        </section>
    )
}