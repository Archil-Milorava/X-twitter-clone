import { Link } from "react-router-dom";

function CardToPremium() {
  return (
    <div className="w-full text-white border border-[#2F3336] h-40 rounded-2xl p-3 flex flex-col gap-2 justify-between items-start">
      <h1 className="text-xl font-bold">Subscribe to Premium</h1>
      <p className="text-sm">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <div className="h-10 text-sm w-28 ">
        <Link to={"/premium"} className="text-white bg-[#1D9BF0] flex items-center justify-center rounded-full w-22 h-10  hover:bg-opacity-90 transition-all">Subscribe</Link>
      </div>
    </div>
  );
}

export default CardToPremium;
