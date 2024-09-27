import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <div className="p-2 border-b border-[#2F3336] flex items-center gap-2">
      <button onClick={() => navigate(-1)}>
        <IoMdArrowBack className="text-white text-2xl hover:bg-[#4d5053]  rounded-full transition-all" />
      </button>
      <div className="">
        <h1 className="text-white font-bold text-xl tracking-wide">
          achi milrava
        </h1>
        <p className="text-[#71767B] text-xs">posts 3</p>
      </div>
    </div>
  );
}
