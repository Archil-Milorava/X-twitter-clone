import { IoCalendarOutline } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import GoBack from "./GoBack";
import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [user, setUser] = useState([]);

  

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/")
      .then((res) => setUser(res.data.users[3]));
  }, []);

  return (
    <main className="border-b border-[#2F3336]">
      <section className="relative h-16 flex items-center  gap-4">
        <GoBack />
      </section>
      <section className="w-full ">
        <div className=" w-full ">
          <LazyLoadImage
            alt={user.coverImage}
            src={user.coverImage}
            className="h-[14rem]  object-cover w-full shadow-lg"
          />
        </div>
        <div className="absolute  rounded-full skeleton   translate-x-1/2 -translate-y-16">
          <LazyLoadImage
            loading="lazy"
            src={user.profilePicture}
            className="h-[10rem] w-[10rem] rounded-full border-4 border-black object-cover "
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
            <h1 className="text-white text-3xl font-semibold">{user.fullName}</h1>
            <p className="text-[#71767B] ">@{user.userName}</p>
          </div>
          <div className="flex items-center gap-3">
            <IoCalendarOutline className="text-[#71767B]" />
            <p className="text-[#71767B] text-sm">joined june 2022</p>
          </div>
          <div className="flex gap-5">
            <Link
              to={"/profile/followers"}
              className="text-[#71767B] hover:underline"
            >
              <span className="font-semibold text-white">440</span> Followers
            </Link>
            <Link
              to={"/profile/following"}
              className="text-[#71767B] hover:underline"
            >
              <span className="font-semibold text-white">120</span> Following
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default User;
