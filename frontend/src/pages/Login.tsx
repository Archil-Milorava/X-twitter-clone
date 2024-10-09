import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import XSvg from "../ui/XSvg";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { MdOutlineMail, MdPassword } from "react-icons/md";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate()
  const queryClient = useQueryClient()


  const { mutate, isPending, error } = useMutation({
    mutationFn: async () => {
      await axios
        .post("http://localhost:5000/api/auth/login", formData, {withCredentials: true})
        .then((res) => res.data)
        .catch((err) => console.log(err.response.data));
    },
    onSuccess: () => {
      navigate("/");
      console.log("success");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black  flex h-screen">
      <div className="flex-1 hidden lg:flex items-center  justify-center">
        <XSvg className="lg:w-2/3 fill-white" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
          <XSvg className="w-24 lg:hidden fill-white" />
          <h1 className="text-4xl font-extrabold text-white">{"Let's"} go.</h1>
          <label className="input input-bordered rounded flex items-center gap-2">
            <MdOutlineMail />
            <input
              type="text"
              className="grow"
              placeholder="username"
              name="userName"
              onChange={handleInputChange}
              value={formData.userName}
            />
          </label>

          <label className="input input-bordered rounded flex items-center gap-2">
            <MdPassword />
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>
          <button className="btn rounded-full border-transparent bg-[#1D9BF0] text-white">
            {isPending ? "Loading..." : "Login"}
          </button>
          {error && <p className="text-red-500">{error.message}</p>}
        </form>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-white text-lg">{"Don't"} have an account?</p>
          <Link to="/signup">
            <button className="btn rounded-full border-[#1D9BF0] text-white btn-outline w-full">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
