export type FoodInfo = {
    id: string;
    name: string;
    description: string;
    imageId: string;

    price?: number;
    defaultPrice?: number;

    isVeg?: number;

    ratings?: {
        aggregatedRating?: {
            rating?: string;
            ratingCountV2?: string;
        };
    };
}

export type ItemCard = {
    card: {
        info: FoodInfo;
    };
}

export type MenuCategory = {
    title: string;
    itemCards: ItemCard[];
    categories?: MenuCategory[];
}

export type RestMenu = {
    card:{
        card: MenuCategory;
    };
}[];

export type InitialState={
    RestaurantMenu:null|RestMenu,
    loading:boolean,
    error:unknown,
}