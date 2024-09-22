import Activity from "../ui/Activity";
import PoseterInfo from "../ui/PoseterInfo";

function Post() {
  return (
    <div className="flex flex-col   w-full p-4 border-b border-[#2F3336]">
      <PoseterInfo />

      <div className=" flex flex-col items-end">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="s"
            className="h-auto max-h-[20rem] rounded-2xl shadow-2xl"
          />
        </div>
        <section className="mt-2">
        </section>
          <Activity />
      </div>
    </div>
  );
}

export default Post;
