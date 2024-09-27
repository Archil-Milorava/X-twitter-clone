import Activity from "../ui/Activity";
import PoseterInfo from "../ui/PoseterInfo";

// interface Postprops {
//   post: {
//     _id: string;
//     text: string;
//     image: string;
//   };
// }

function Post() {

// const { _id, text, image } = post;

  return (
    <div className="flex flex-col   w-full p-4 border-b border-[#2F3336]">
      <PoseterInfo />

      <div className=" flex flex-col items-end">
      {/* <div className="text-white p-2 text-sm  w-full">
        {text}
        </div>
        <div>
          <img
            src={image}
            alt={_id}
            className="h-auto w-full max-h-full rounded-2xl shadow-2xl"
          />
        </div> */}
        <section className="mt-2"></section>
        <Activity />
      </div>
    </div>
  );
}

export default Post;
