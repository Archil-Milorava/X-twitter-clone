import Post from "../components/Feed/Post"
import Sidebar from "../components/Sidebar/Sidebar"

function Home() {
  return (
    <main className="bg-[#000000] grid grid-cols-[1fr_3fr_2fr] h-screen w-full px-36">
       <section className="w-[18rem] h-screen max-h-screen">
        <Sidebar />
       </section>
       <section className="bg-gree-400 w-[36rem] h-full flex flex-col">
        <Post />
       </section>
       <section className="bg-blue-400 w-full h-full">
        hello
       </section>
    </main>
  )
}

export default Home