import { CiSearch, CiUser } from "react-icons/ci";
import { FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Compose from "../../pages/Compose";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function Sidebar() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      await axios
        .post("http://localhost:5000/api/auth/logout")
        .then((res) => res.data)
        .catch((err) => console.log(err.response.data));
    },
    onSuccess: () => {
      navigate("/login");
      console.log("success");
    },
  });

  function handleLogout() {
    mutate();
  }

  return (
    <main className="h-screen max-h-screen w-full pt-1 flex flex-col justify-between gap-8 pl-2 border-r border-[#2F3336] p-4 ">
      <div className=" h-20  w-20 flex items-center pl-2 ">
        <Link to={"/"}>
          <FaXTwitter className="text-5xl  text-white p-1 rounded-full hover:bg-[#E7E9EA] cursor-pointer transition-all hover:bg-opacity-10" />
        </Link>
      </div>
      <nav>
        <ul className="flex flex-col gap-2 ">
          <Link
            to={"/"}
            className="  w-fullh-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer "
          >
            <GoHomeFill className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white ">Home</a>
          </Link>

          <Link className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <CiSearch className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white">Search</a>
          </Link>

          <Link className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <IoMdNotificationsOutline className="text-3xl text-white" />
            <Link className="text-xl font-bold text-white">Notification</Link>
          </Link>

          <li className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer ">
            <FaRegEnvelope className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white">Messages</a>
          </li>

          <Link
            to={"/premium"}
            className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer "
          >
            <FaXTwitter className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white">Premium</a>
          </Link>

          <Link
            to={"/profile"}
            className="w-full h-14 flex items-center gap-4 p-2 hover:bg-[#E7E9EA] hover:bg-opacity-10 rounded-full transition-all cursor-pointer "
          >
            <CiUser className="text-3xl text-white" />
            <a className="text-xl font-semibold text-white">Profile</a>
          </Link>
        </ul>
      </nav>

      <Compose />

      <div>
        <div className="flex items-center justify-between px-1 pb-2 h-16 gap-4 hover:bg-[#E7E9EA] cursor-pointer rounded-full hover:bg-opacity-10 p-2 transition-all">
          <div className="h-12 skeleton w-16 rounded-full ">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="avatar"
              className="  h-12 rounded-full object-cover"
            />
          </div>
          <div className="w-full ">
            <h1 className="tracking-wide text-white font-bold">
              Archil Milorava
            </h1>
            <p className="text-sm text-gray-500">@name</p>
          </div>
          <button className="text-red-400" onClick={handleLogout}>
            log out
          </button>
        </div>
      </div>
    </main>
  );
}
