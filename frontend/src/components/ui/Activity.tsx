import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Activity({likes, comments}) {



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
        <p className="text-sm  ">{comments.length}</p>
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
        <p className="text-sm">{likes.length}</p>
      </li>
    </ul>
  );
}

export default Activity;
