import { Route, Routes } from "react-router-dom";
import Compose from "./pages/Compose";
import FollowerOrFollowing from "./pages/FollwerOrFollowing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  
  

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
