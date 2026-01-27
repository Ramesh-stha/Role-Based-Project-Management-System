import { useGetComment } from "@/src/hooks/getComment";
import { useSocketHandler } from "@/src/hooks/socket.hook";

const CommentList = () => {
  const { data: comments, isLoading, refetch, error } = useGetComment();
  useSocketHandler(refetch);

  if (error) return <p className="text-red-500">Failed to load comments</p>;
  if (isLoading) return <p>Loading comments...</p>;

  return (
    <fieldset className="border border-gray-300 rounded-lg p-4 mt-4 w-full">
      <legend className="px-2 text-sm font-semibold text-gray-700">
        Comments
      </legend>

      {/* Scrollable View */}
      <div className="max-h-[300px] overflow-y-auto flex flex-col gap-4 pr-2">
        {!comments?.comment?.length ? (
          <p className="text-gray-500 text-sm">
            No comments yet. Be the first one 👀
          </p>
        ) : (
          comments.comment.map((item: any) => (
            <div key={item._id} className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                {item.username?.charAt(0).toUpperCase()}
              </div>

              {/* Comment Bubble */}
              <div className="bg-gray-100 p-3 rounded-lg shadow max-w-[80%]">
                <p className="text-xs font-semibold text-gray-700">
                  {item.username}
                </p>
                <p className="text-sm text-gray-800 break-words">
                  {item.text}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </fieldset>
  );
};

export default CommentList;
