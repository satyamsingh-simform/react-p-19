import { useState } from "react";
import type { MenuCategory } from "../../utils/restMenuType";
import RestaurantMenuCategoryCard from "./RestaurantMenuCategoryCard";

type RestaurantMenuCategoryProps = {
    menuItems: MenuCategory;
    foodselected: "veg" | "nonveg" | null;
    search:string;
};

export default function RestaurantMenuCategory({
    menuItems,
    foodselected,
    search,
}: RestaurantMenuCategoryProps) {
    const [isOpen, setIsOpen] = useState(true);

    const filteredItems=menuItems?.itemCards?.filter(item=>
        item.card.info.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    if(search && filteredItems?.length===0){
        return null;
    }

    if ("categories" in menuItems) {
        return (
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-2 mb-7 text-2xl font-bold">
                        {menuItems.title}
                    </h1>
                    <button
                        className="text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "˄" : "˅"}
                    </button>
                </div>

                <div>
                    {menuItems?.categories?.map((items) => (
                        <RestaurantMenuCategory
                            key={items?.title}
                            menuItems={items}
                            foodselected={foodselected}
                            search={search}
                        />
                    ))}
                </div>
            </div>
        );
    }

    if (!isOpen) {
        return (
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-4 mb-7 text-2xl font-bold">
                        {menuItems.title}
                    </h1>

                    <button
                        className="text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "˄" : "˅"}
                    </button>
                </div>

                <div className="w-full mb-10 h-4 bg-gray-200 text-gray-300">
                    <hr />
                </div>
            </div>
        );
    }

    if (foodselected === "veg") {
        return (
            <>
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <h1 className="mt-2 mb-7 text-2xl font-bold">
                            {menuItems.title}(
                            {
                                menuItems?.itemCards?.filter(
                                    (food) => "isVeg" in food?.card?.info
                                ).length
                            }
                            )
                        </h1>

                        <button
                            className="text-3xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? "˄" : "˅"}
                        </button>
                    </div>

                    <div>
                        {filteredItems
                            ?.filter(
                                (food) => "isVeg" in food?.card?.info
                            )
                            .map((items) => (
                                <RestaurantMenuCategoryCard
                                    key={items?.card?.info?.id}
                                    restData={items?.card?.info}
                                />
                            ))}
                    </div>
                </div>

                <div className="w-full mb-10 h-4 bg-gray-200 text-gray-300">
                    <hr />
                </div>
            </>
        );
    }

    if (foodselected === "nonveg") {
        return (
            <>
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <h1 className="mt-2 mb-7 text-2xl font-bold">
                            {menuItems.title}(
                            {
                                menuItems?.itemCards?.filter(
                                    (food) => !("isVeg" in food?.card?.info)
                                ).length
                            }
                            )
                        </h1>

                        <button
                            className="text-3xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? "˄" : "˅"}
                        </button>
                    </div>

                    <div>
                        {filteredItems
                            ?.filter(
                                (food) => !("isVeg" in food?.card?.info)
                            )
                            .map((items) => (
                                <RestaurantMenuCategoryCard
                                    key={items?.card?.info?.id}
                                    restData={items?.card?.info}
                                />
                            ))}
                    </div>
                </div>

                <div className="w-full mb-10 h-4 bg-gray-200 text-gray-300">
                    <hr />
                </div>
            </>
        );
    }

    return (
        <>
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-2 mb-7 text-2xl font-bold">
                        {menuItems.title}({menuItems?.itemCards?.length})
                    </h1>

                    <button
                        className="text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "˄" : "˅"}
                    </button>
                </div>

                <div>
                    {filteredItems?.map((items) => (
                        <RestaurantMenuCategoryCard
                            key={items?.card?.info?.id}
                            restData={items?.card?.info}
                        />
                    ))}
                </div>
            </div>

            <div className="w-full mb-10 h-4 bg-gray-200 text-gray-300">
                <hr />
            </div>
        </>
    );
}