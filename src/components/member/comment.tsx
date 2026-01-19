"use client";
import React, { useState } from "react";
import { useSocket } from "@/src/Provider/SocketProvider";
import { useSocketHandler } from "@/src/hooks/socket.hook";
import { useComment } from "@/src/hooks/mutation/useComment";

const comment=()=>{
    //const socket=useSocket();

    
    const {mutate,error}=useComment();
    const[text,settext]=useState<string>("");
  
   
    
const handleComment = () => {


  mutate(text, {
    onSuccess: () => {
      alert("comment added successfully");
      settext("");
    },
  });
};



if(error){
    return <p>error is ...</p>
}


    return(
        <>    
        <div className="flex flex-row m-3">
            
            <textarea name="text" placeholder="Left your comment ......." className="w-70  border border-yellow-500  rounded-lg" value={text} onChange={(e)=>settext(e.target.value)}/> 
            <button className="p-3 m-2 bg-green-500 hover:bg-blue-500 cursor-pointer rounded-lg" onClick={handleComment}>Send</button>
        
        </div>
      
        </>
    )
}
export default comment;