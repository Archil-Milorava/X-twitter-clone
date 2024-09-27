import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function PostSomething() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null); // Create a ref for the textarea

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(text);
    setText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }

  return (
    <main className="w-full p-2 flex flex-col justify-between border-b-2 border-[#2F3336]">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex gap-3 items-start p-2 relative ">
          <img
            onClick={() => navigate("/profile")}
            src="https://avatar.iran.liara.run/public/boy"
            alt="avatar"
            className="  h-10 rounded-full object-contain cursor-pointer"
          />

          <textarea
            ref={textareaRef}
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
            <button
              type="submit"
              className="bg-[#1D9BF0] hover:bg-opacity-90 transition-all h-full w-full rounded-full text-white tracking-wide font-semibold"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default PostSomething;
