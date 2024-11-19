import mongoose, { Model, Schema, model, models } from "mongoose";

type Menu_item = {
    _id : string,
    name : string,
    description : string,
    size : string,
    price : number,
    available : boolean
    category_id : Schema.Types.ObjectId
}

const menuItemSchema = new Schema<Menu_item>({
    name : {type : String, required  : true},
    description : {type : String ,required : true} ,
    size : {type : String},
    price : {type : Number},
    available : {type : Boolean , default : true},
    category_id : {type : Schema.Types.ObjectId, required : true , ref : "Category"}
    }
)

export const menuItemModel : Model<Menu_item> = models.MenuItem || model<Menu_item>("MenuItem", menuItemSchema);