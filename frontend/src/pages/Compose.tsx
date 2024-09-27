import { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function Compose() {
  const [text, setText] = useState("");
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
  }

 

  return (
    <>
      <div className="h-12 w-full ">
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="bg-[#1D9BF0] hover:bg-opacity-90 transition-all h-full w-full rounded-full text-white tracking-wide font-semibold "
        >
          Post
        </button>
      </div>

      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box  w-[36rem] bg-black">
          <form onSubmit={handleSubmit}>

         
          <main className="w-full h-full  p-2 flex flex-col justify-between ">
            <div className="w-full flex gap-3 items-start p-2 relative ">
              <img
                onClick={() => navigate("/profile")}
                src="https://avatar.iran.liara.run/public/boy"
                alt="avatar"
                className="h-10 w-10 rounded-full object-cover cursor-pointer"
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
                <button
                  className="bg-[#1D9BF0] hover:bg-opacity-90 transition-all h-full w-full rounded-full text-white tracking-wide font-semibold "
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </main>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Compose;
