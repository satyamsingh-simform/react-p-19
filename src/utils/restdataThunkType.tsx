export type RestData={
    info:{
        areaName:string,
        avgRating:number,
        cloudinaryImageId:string,
        cuisines:string[],
        id:string,
        name:string,
        costForTwo:string,
        sla:{
            slaString:string,
            deliveryTime:number,
        },
        locality:string,
        aggregatedDiscountInfoV3:{
            header:string,
            subHeader:string,
        }
    }
}

export type InitialState={
    restaurantData:null|RestData[],
    loading:boolean,
    error:unknown|string,
}