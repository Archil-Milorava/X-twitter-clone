import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";


function User() {
  return (
    <main className="border-b border-[#2F3336]">
      <section className="relative h-16 flex items-center px-5 gap-4">
        <Link to={"/"}>
          <IoMdArrowBack className="text-white text-2xl hover:bg-[#4d5053]  rounded-full transition-all" />
        </Link>
        <div className="">
          <h1 className="text-white font-bold text-xl tracking-wide">
            achi milrava
          </h1>
          <p className="text-[#71767B] text-xs">posts 3</p>
        </div>
      </section>
      <section className="w-full ">
        <div className=" w-full ">
          <img
            src="https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="as"
            className="h-[14rem]  object-cover w-full shadow-lg"
          />
        </div>
        <div className="absolute  translate-x-1/2 -translate-y-16">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="asd"
            className="h-[10rem] w-[10rem] rounded-full border-4 border-black object-cover"
          />
        </div>
        <div className="flex justify-end p-4">
          <button className="text-white border border-[#2F3336] p-2 w-28 h-10 rounded-full hover:bg-gray-800">
            Edit Profile
          </button>
        </div>
      </section>
      <section className="mt-8">
        <div className=" w-full p-4 flex flex-col gap-5 items-start">
          <div>
            <h1 className="text-white text-3xl font-semibold">Achi milorava</h1>
            <p className="text-[#71767B] ">@achimilrava</p>
          </div>
          <div className="flex items-center gap-3">
            <IoCalendarOutline className="text-[#71767B]" />
            <p className="text-[#71767B] text-sm">joined june 2022</p>
          </div>
          <div className="flex gap-5">
            <Link className="text-[#71767B] hover:underline">
              <span className="font-semibold text-white">440</span> Followers
            </Link>
            <Link className="text-[#71767B] hover:underline">
              <span className="font-semibold text-white">120</span> Following
            </Link>
          </div>
        </div>
      </section>
    </main>

  );
}

export default User;
