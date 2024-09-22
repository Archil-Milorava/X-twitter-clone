import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import FollowerOrFollowing from "./pages/FollwerOrFollowing"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/followers" element={<FollowerOrFollowing />} />
      </Routes>
    </div>
  )
}

export default App