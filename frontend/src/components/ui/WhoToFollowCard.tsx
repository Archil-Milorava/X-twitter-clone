import FollowSomeoneProfile from "./FollowSomeoneProfile";

export default function WhoToFollowCard() {
  return (
    <div className="w-full text-white border border-[#2F3336]  rounded-2xl p-3 flex flex-col gap-2  items-start">
      <h1 className="text-xl font-bold">Who to follow</h1>
      <div className="mt-2 space-y-5  w-full h-15">
<FollowSomeoneProfile />
<FollowSomeoneProfile />
<FollowSomeoneProfile />

      </div>
    </div>
  )
}
