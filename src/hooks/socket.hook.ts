import { useEffect } from "react";
import { useSocket } from "../Provider/SocketProvider";

export const useSocketHandler = (commentRefetch:any) => {
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    

    socket.on("newComment", (data:any)=>{
      console.log('data:', data);
      commentRefetch()
    });

    return () => {
      socket.off("newComment");
    };
  }, [socket]);
};
 