"use client";
import React, { useState } from "react";
import { useSocket } from "@/src/Provider/SocketProvider";
import { useComment } from "@/src/hooks/mutation/useComment";
import CommentList from "./CommentList";
import toast from "react-hot-toast";
const comment = () => {
  const socket = useSocket();

  const { mutate, error } = useComment();
  const [text, settext] = useState<string>("");

  const handleComment = () => {
    try {
      socket?.emit("newComment", text);
      mutate(text, {
        onSuccess: () => {
          toast.success("comment added successfully");
          settext("");
        },
      });
    } catch (error) {
      alert("Failed to add comment or Socket failed");
    }
  };

    if (error) {
 toast.error("Please enter Comment ")
  }
  

 

  return (
    <>
      <div className="flex flex-row m-3">
        <textarea
          name="text"
          placeholder="Left your comment ......."
          className="w-70  border border-yellow-500  rounded-lg"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <button
          className="p-3 m-2 bg-green-500 hover:bg-blue-500 cursor-pointer rounded-lg"
          onClick={handleComment}
        >
          Send
        </button>
      </div>
      <CommentList/>
    </>
  );
};
export default comment;
