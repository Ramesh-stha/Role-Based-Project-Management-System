import { useEffect } from "react";
import { useSocket } from "../Provider/SocketProvider";

export const useSocketHandler = (setComment: Function) => {
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handler = (data: any) => {
      setComment((prev: any[]) => [...prev, data]);
    };

    socket.on("newComment", handler);

    return () => {
      socket.off("newComment", handler);
    };
  }, [socket, setComment]);
};
 