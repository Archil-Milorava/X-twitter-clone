import Post from "../components/Feed/Post";
import Sidebar from "../components/Sidebar/Sidebar";
import CardToPremium from "../components/ui/CardToPremium";
import SearchBar from "../components/ui/SearchBar";
import WhoToFollowCard from "../components/ui/WhoToFollowCard";
import User from "../components/User/User";

export default function Profile() {




  
  return (
    <main className="bg-[#000000] grid grid-cols-[1fr_3fr_2fr]  w-full px-36">
      <section className="w-[18rem] h-screen max-h-screen sticky top-0">
        <Sidebar />
      </section>
      <section className=" w-[36rem]   flex flex-col  overflow-y-scroll scrollbar-none">
        <User />
        <Post />
      </section>
      <section className="border-l border-[#2F3336] px-5  w-full h-screen sticky top-0  pt-4 flex flex-col items-center gap-3">
      <SearchBar />
        <CardToPremium />
        <WhoToFollowCard />
      </section>
    </main>
  )
}
