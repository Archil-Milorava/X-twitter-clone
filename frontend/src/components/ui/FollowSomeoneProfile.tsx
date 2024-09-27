import { useState } from "react";
import Spinner from "./Spinner";

function FollowSomeoneProfile() {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoading() {
    setIsLoading(false);
  }

  return (
    <div className="flex items-center justify-between px-1 ">
      <div className="flex gap-2 items-center">
        {isLoading && <Spinner />}
        {
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="as"
            className="h-10"
            onLoad={handleLoading}
          />
        }

        <div className="flex flex-col ">
          <h1 className="font-bold text-white ">Mercedes</h1>
          <p className="text-[#71767B] text-sm">@mercedes</p>
        </div>
      </div>
      <button className="w-20 h-8 bg-white rounded-full text-black font-semibold cursor-pointer hover:bg-opacity-80 transition-all">
        Follow
      </button>
    </div>
  );
}

export default FollowSomeoneProfile;
