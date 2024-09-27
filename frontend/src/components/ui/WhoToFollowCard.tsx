import FollowSomeoneProfile from "./FollowSomeoneProfile";
import Spinner from "./Spinner";

export default function WhoToFollowCard() {
  const loading = false;

  return (
    <div className="w-full text-white border border-[#2F3336]  rounded-2xl p-3 flex flex-col gap-2  items-start">
      <h1 className="text-xl font-bold">Who to follow</h1>
      <div className="mt-2 space-y-5  w-full h-15">
        {loading ? (
          <div className="flex w-full h-full items-center justify-center">
            <Spinner />
          </div>

        ) : (
          <>
            <FollowSomeoneProfile />
            <FollowSomeoneProfile />
            <FollowSomeoneProfile />
          </>
        )}
      </div>
    </div>
  );
}
