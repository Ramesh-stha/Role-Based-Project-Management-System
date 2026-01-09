import mongoose from 'mongoose';
import { type } from 'node:os';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,

    },
    organizationname:{
        type:String,
        require:true,

    },
    role:{
        type:String,
        enum:['admin','manager','member'],
        default:'admin',
        require:true,
        
   },
   manager:{
    type:String,
   },
   address:{
    type:String,
    require:true,
   },
   phone:{
    type:String,
    require:true,
   },
   email:{
    type:String,
    require:true,
    tolowercase:true,
    unique:true,
   },
   password:{
    type:String,
    require:true,
    minLength:8,

   },


},
{
    timestamps:true,
}
);
export default mongoose.models.User || mongoose.model("User",userSchema);