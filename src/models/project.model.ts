import mongoose from "mongoose";

const ProjectSchema= new mongoose.Schema(
    {
        projectname:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true,
        },

        photo:{
            type:String,
            require:true,
        },
        assigneddate:{
            type:Number,
            require:true
        },
        submittiondate:{
            type:Number,
            require:true,
        },
        pdf:{
            type:String,
            require: true,
        },
        manager:{
            type:String,
            require:true,
        }

        
    },
    {
        timestamps:true,
    }
)
export default mongoose.models.Project ||mongoose.model("Project",ProjectSchema);