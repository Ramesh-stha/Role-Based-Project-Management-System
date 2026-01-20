import { useGetComment } from "@/src/hooks/getComment";
import { useSocketHandler } from "@/src/hooks/socket.hook";
import toast from "react-hot-toast";

const CommentList = () => {
      const { data: comments, isLoading, refetch, error } = useGetComment();
    
  console.log("comments are ", comments);
      useSocketHandler(refetch);
    
      if(error){
        return <p>Error: ${error.message}</p>
      }

  if (isLoading) {
    return <p>loading ....</p>;
  }
     if (!comments) {
    return <p>No comments, Be the first one to comment</p>;
  }
  return (
  <div className="grid grid-cols-2 ">
        {comments?.comment.map((item: any) => (
          <div
            key={item._id}
            className="flex flex-col h-auto w-auto  border border-yellow-500 p-2 m-2 rounded-lg shadow-md"
          >
            <p className=" ">{item.username}</p>
            <p className="p-3  rounded-md shadow text-sm break-words">
              Message:{item.text}
            </p>
          </div>
        ))}
      </div>
  );
};

export default CommentList;