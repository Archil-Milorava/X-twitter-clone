import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import CardToPremium from "../components/ui/CardToPremium";
import SearchBar from "../components/ui/SearchBar";
import WhoToFollowCard from "../components/ui/WhoToFollowCard";
import { FaXTwitter } from "react-icons/fa6";

function Premium() {
  return (
    <main className="bg-[#000000] grid grid-cols-[1fr_3fr_2fr]  w-full px-36">
      <section className="w-[18rem] h-screen max-h-screen sticky top-0">
        <Sidebar />
      </section>
      <section className=" w-[36rem] h-screen flex flex-col items-center justify-center gap-8 px-5">
        <FaXTwitter className="text-white text-9xl" />
        <h1 className="text-white text-4xl text-center font-semibold">
          Premium Account is not Available, as this application is Clone of the
          original one.
        </h1>

        <Link to={"/"} className="text-black bg-white flex items-center justify-center rounded-full w-28 h-12 text-lg hover:bg-opacity-90 transition-all">
          Home
        </Link>
      </section>
      <section className="border-l border-[#2F3336] px-5  w-full h-screen sticky top-0  pt-4 flex flex-col items-center gap-3">
        <SearchBar />
        <CardToPremium />
        <WhoToFollowCard />
      </section>
    </main>
  );
}

export default Premium;
