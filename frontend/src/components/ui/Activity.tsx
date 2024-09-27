import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Activity() {
  return (
    <ul className="flex items-center justify-around text-white w-full ">
      <li
        className="flex items-center gap-1
      cursor-pointer
      text-[#71767B] 
      hover:text-green-300
      hover:rounded-full
transition-all "
      >
        <Link>
          <FaRegComment className="text-xl " />
        </Link>
        <p className="text-sm  ">701</p>
      </li>
      <li
        className="flex items-center gap-1
      
      cursor-pointer
      text-[#71767B] 
      hover:text-pink-300
      hover:rounded-full
transition-all"
      >
        <Link>
          <FaRegHeart className="text-xl" />
        </Link>
        <p className="text-sm">321</p>
      </li>
    </ul>
  );
}

export default Activity;
