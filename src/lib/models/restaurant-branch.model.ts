import { model, models, Schema  } from "mongoose";

type Location = {
    type : "Point",
    coordinates : [number , number],
}

type RestaurantBranch = {
    _id : Schema.Types.ObjectId,
    restaurantId  : Schema.Types.ObjectId,
    branchName : string,
    location : Location,
}

const RestaurantBranchSchema = new Schema<RestaurantBranch>({
    restaurantId : {type : Schema.Types.ObjectId, ref : "restaurants"},
    branchName : {type : String, required : true},
    location : {type: {
        type: String, 
        enum: ['Point'], 
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }}
})

export const RestaurantBranchModel = models['restaurant-branches'] || model<RestaurantBranch>("restaurant-branches", RestaurantBranchSchema) 