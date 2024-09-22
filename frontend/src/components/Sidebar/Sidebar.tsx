import { CiSearch, CiUser } from "react-icons/ci";
import { FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <main className="h-screen max-h-screen w-full pt-1 flex flex-col justify-between gap-8 pl-2 border-r border-[#2F3336] p-4 ">
      <div className=" h-20  w-20 flex items-center pl-2 ">
        <Link to={"/"}>
        <FaXTwitter className="text-5xl  text-white p-1 rounded-full hover:bg-[#E7E9EA] cursor-pointer transition-all hover:bg-opacity-10" />
        </Link>
      </div>
      <nav>
        <ul className="flex flex-col gap-2 ">
          <li className="  w-fullh-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <GoHomeFill className="text-3xl text-white" />
            <Link to={"/"} className="text-xl font-semibold text-white ">Home</Link>
          </li>

          <li className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <CiSearch className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white">Search</a>
          </li>

          <li className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <IoMdNotificationsOutline className="text-3xl text-white" />
            <a className="text-xl font-bold text-white">Notification</a>
          </li>

          <li className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <FaRegEnvelope className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white">Messages</a>
          </li>

          <li className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <FaXTwitter className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white">Premium</a>
          </li>

          <li className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <CiUser className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white">Profile</a>
          </li>
        </ul>
      </nav>
      <div className="h-12 w-full ">
        <Button>Post</Button>
      </div>
      <div>
        <div className="flex items-center justify-between px-1 pb-2 h-16 gap-4 hover:bg-[#E7E9EA] cursor-pointer rounded-full hover:bg-opacity-10 p-2 transition-all">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="avatar"
            className="h-12"
          />
          <div className="w-full ">
            <h1 className="tracking-wide text-white font-bold">
              Archil Milorava
            </h1>
            <p className="text-sm text-gray-500">@name</p>
          </div>
          <button className="text-white text-4xl p-2 rounded-full">...</button>
        </div>
      </div>
    </main>
  );
}
