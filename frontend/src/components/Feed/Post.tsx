import Activity from "../ui/Activity";
import PoseterInfo from "../ui/PoseterInfo";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { useDeletePost } from "../../services/usePosts";

function Post({ post }) {
  const queryClient = useQueryClient();
  const { data: authUser } = useQuery({ queryKey: ["user"] });

  const { _id, text, image, user, likes, comments } = post;

  const isUser = authUser._id === user._id;

  const { mutate, isPending } = useMutation({
    mutationFn: useDeletePost,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  function handleDelete() {
    mutate(_id);
  }

  if (isPending) {
    return <p className="w-full h-[35rem] flex items-center justify-center text-white text-lg">Loading...</p>;
  }

  return (
    <div className="flex flex-col   w-full p-4 border-b border-[#2F3336]">
      <PoseterInfo user={user}/>

      <div className=" flex flex-col items-end">
        {isUser && (
          <button>
            <MdDelete
              onClick={handleDelete}
              className="text-xl text-white hover:text-red-400 transition-all"
            />
          </button>
        )}
        <div className="text-white p-2 text-sm  w-full">{text}</div>
        <div className="max-w-full max-h-[35rem]">
          <img
            src={image}
            alt={_id}
            className="h-auto object-cover  w-full max-h-full rounded-2xl shadow-2xl"
          />
        </div>
        <section className="mt-2"></section>
        <Activity likes={likes} comments={comments} />
      </div>
    </div>
  );
}

export default Post;
