import Post from "../components/Feed/Post";
import PostSomething from "../components/Feed/PostSomething";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  return (
    <main className="bg-[#000000] grid grid-cols-[1fr_3fr_2fr]  w-full px-36">
      <section className="w-[18rem] h-screen max-h-screen sticky top-0">
        <Sidebar />
      </section>
      <section className=" w-[36rem]   flex flex-col  overflow-y-scroll scrollbar-none">
        <PostSomething />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
      <section className="bg-blue-400 w-full h-screen sticky top-0">
        hello
      </section>
    </main>
  );
}

export default Home;
