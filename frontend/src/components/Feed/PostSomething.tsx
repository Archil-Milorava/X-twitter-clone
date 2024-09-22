import { useState } from "react";
import Button from "../../ui/Button";

function PostSomething() {
  const [text, setText] = useState("");



  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <main className="w-full p-2 flex flex-col justify-between border-b-2 border-[#2F3336]">
      <div className="w-full flex gap-3 items-start p-2 relative ">
        <img
          src="https://avatar.iran.liara.run/public/boy"
          alt="avatar"
          className="h-10 "
        />
        <textarea
          onChange={handleChange}
          value={text}
          rows={2}
          className="bg-black text-lg w-full  h-auto  p-1 text-white
          outline-none resize-none
          focus:border-b border-[#2F3336] transition-all
          placeholder:text-[#52595e] placeholder:text-2xl
          overflow-y-hidden "
          placeholder="What is happening?!"
        />
      </div>
      <div className="w-full flex justify-end items-end">
        <div className="w-20 h-8">
          <Button>Post</Button>
        </div>
      </div>
    </main>
  );
}

export default PostSomething;
