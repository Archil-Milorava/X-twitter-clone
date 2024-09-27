import { useEffect, useState } from "react";
import Post from "../components/Feed/Post";
import PostSomething from "../components/Feed/PostSomething";
import Sidebar from "../components/Sidebar/Sidebar";
import CardToPremium from "../components/ui/CardToPremium";
import SearchBar from "../components/ui/SearchBar";
import WhoToFollowCard from "../components/ui/WhoToFollowCard";
import axios from "axios";

interface Post {
  _id: string;
  text: string;
  image: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  console.log(posts);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/")
      .then((res) => setPosts(res.data.posts));
  }, []);

  return (
    <main className="bg-[#000000] grid grid-cols-[1fr_3fr_2fr]  w-full px-36">
      <section className="w-[18rem] h-screen max-h-screen sticky top-0">
        <Sidebar />
      </section>
      <section className=" w-[36rem]   flex flex-col  overflow-y-scroll scrollbar-none">
        <PostSomething />

        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </section>
      <section className="border-l border-[#2F3336] px-5  w-full h-screen sticky top-0  pt-4 flex flex-col items-center gap-3">
        <SearchBar />
        <CardToPremium />
        <WhoToFollowCard />
        <a
          href="https://github.com/Archil-Milorava/X-twitter-clone"
          target="_blank"
          className="text-[#71767B] text-sm tracking-wide underline cursor-pointer transition-all "
        >
          Created by <span className="text-pink-300">Archil Milorava</span>
        </a>
      </section>
    </main>
  );
}

export default Home;
