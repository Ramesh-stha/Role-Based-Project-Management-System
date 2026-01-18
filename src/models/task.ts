import mongoose from "mongoose";

const taskSchema =new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
     manager:{
        type:String,
        require:true,
    },
     email:{
        type:String,
        require:true,
    },
    pdf:{
        type:String,
        require:true,

    }
})
export default mongoose.models.Task || mongoose.model("Task",taskSchema);