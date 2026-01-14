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
            type:Date,
            require:true
        },
        submittiondate:{
            type:Date,
            require:true,
        },
        status:{
            type:String,
            require:true,
            enum:["PENDING","ACCEPTED","COMPLETED"],
            default:"PENDING"
        },
        pdf:{
            type:String,
            require: true,
        },
        manager:{
            type:String,
            require:true,
        },
        member:{
            type:String,
            require:true
        }

        
    },
    {
        timestamps:true,
    }
)
export default mongoose.models.Project ||mongoose.model("Project",ProjectSchema);