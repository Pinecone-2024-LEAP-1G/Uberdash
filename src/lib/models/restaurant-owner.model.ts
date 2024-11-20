import { Model, model, models, Schema} from "mongoose";

type RestaurantOwner = {
    _id : string,
    restaurant_id : Schema.Types.ObjectId,
    email : string,
    password : string
}

const RestaurantOwnerSchema = new Schema<RestaurantOwner>({
    restaurant_id : {type : Schema.Types.ObjectId, ref : "restaurant"},
    email : {type : String, required : true},
    password : {type : String}
})