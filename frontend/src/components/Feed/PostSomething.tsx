import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function PostSomething() {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const { data: authUser } = useQuery({
    queryKey: ["user"],
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axios
        .post(
          "http://localhost:5000/api/posts/create",
          { text, image },
          {
            withCredentials: true,
          }
        )
        .then((res) => res.data)
        .catch((err) => console.log(err.response.data));

      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setText("");
      setImage(null);
    },
    onError: (err) => {
      console.log("error", err);
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate();

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }

  function handleOnClick() {
    if (imageRef.current) {
      imageRef.current.click();
    }
  }

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
          <div>
            <IoMdPhotos
              className="text-[#1D9BF0] hover:text-opacity-70 transition-all cursor-pointer"
              onClick={handleOnClick}
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={imageRef}
              onChange={handleImgChange}
            />
            
          </div>
          
        </div>
        <div className="w-full flex justify-end items-end">
          <div className="w-20 h-8">
            <button
              type="submit"
              className="bg-[#1D9BF0] hover:bg-opacity-90 transition-all h-full w-full rounded-full text-white tracking-wide font-semibold"
            >
              {isPending ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt="image"
            
          />
        )}
      </form>
    </main>
  );
}

export default PostSomething;
