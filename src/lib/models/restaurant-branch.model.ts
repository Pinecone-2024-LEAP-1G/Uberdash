import { model, models, Schema  } from "mongoose";

type Location = {
    type : "Point",
    coordinates : [number , number],
}

type RestaurantBranch = {
    _id : string,
    restaurant_id  : Schema.Types.ObjectId,
    branch_name : string,
    location : Location,
}

const RestaurantBranchSchema = new Schema<RestaurantBranch>({
    restaurant_id : {type : Schema.Types.ObjectId, ref : "Restaurant"},
    branch_name : {type : String, required : true},
    location : {type : Location}
})

export const RestaurantBranchModel = models.RestaurantBranch || model<RestaurantBranch>("RestaurantBranch", RestaurantBranchSchema) 