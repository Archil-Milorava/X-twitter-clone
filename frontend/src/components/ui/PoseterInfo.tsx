import { useQuery } from "@tanstack/react-query";

function PoseterInfo({ user }) {
  return (
    <div className="w-full flex gap-2 mb-2 cursor-pointer text-opacity-75">
      <div>
        <img
          src="https://avatar.iran.liara.run/public/boy"
          alt="boy"
          className="h-10"
        />
      </div>
      <section>
        <div className="flex gap-1 items-center">
          <a className="text-[#E7E9EA] font-bold tracking-wide">
            {user.fullName}
          </a>
          <p className="text-[#71767B] text-xs">@{user.userName}</p>
        </div>
      </section>
    </div>
  );
}

export default PoseterInfo;
