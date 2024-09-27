import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import FollowerOrFollowing from "./pages/FollwerOrFollowing"
import Premium from "./pages/Premium"
import Compose from "./pages/Compose"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/following" element={<FollowerOrFollowing />} />
        <Route path="/profile/followers" element={<FollowerOrFollowing />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/compose" element={<Compose />} />
      </Routes>
    </div>
  )
}

export default App