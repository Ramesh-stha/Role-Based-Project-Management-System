"use client"
import React from "react";
type todostate={
addtask:string,
}
const Board =()=>{
  
    const handleadd=()=>{
        alert("clicked successfully");
    }
    return(
       <div className="boardhead">
        <p>kanban board</p>
       <div className="a">
        <p>TO DO</p>
      <input type="text"
       name="addtask" 
       onChange={handleadd}
      />
      <button>Add</button>
        </div>

       </div>
        
    )
}
export default Board