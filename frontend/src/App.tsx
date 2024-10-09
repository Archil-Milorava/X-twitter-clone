import { Route, Routes } from "react-router-dom";
import Compose from "./pages/Compose";
import FollowerOrFollowing from "./pages/FollwerOrFollowing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios
        .get("http://localhost:5000/api/auth/authCheck", {
          withCredentials: true,
        })
        .then((res) => res.data.user)
        .catch((err) => console.log(err.response.data));
      return res;
    },
  });

  return (
    <div className="">
      <Routes>
        <Route path="/" element={userData ? <Home /> : <Login />} />
        <Route path="/login" element={!userData ? <Login /> : <Home />} />
        <Route path="/signup" element={!userData ? <Signup /> : <Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/following" element={<FollowerOrFollowing />} />
        <Route path="/profile/followers" element={<FollowerOrFollowing />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/compose" element={<Compose />} />
      </Routes>
    </div>
  );
}

export default App;
