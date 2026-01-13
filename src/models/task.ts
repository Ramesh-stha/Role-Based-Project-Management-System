import mongoose from "mongoose";

const taskSchema =new mongoose.Schema({
    taskname:{
        type:String,
        require:true,
    },
    pdf:{
        type:String,
        require:true,

    }
})
export default mongoose.models.Task || mongoose.model("Task",taskSchema);