import { useState, useEffect } from "react";
import { fetchPosts } from "./api";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
function App() {
  const [posts, setposts] = useState({});
  const [user, setUser] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const getapi = async () => {
      const { data } = await fetchPosts();
      setposts(data);
    };

    getapi();
  }, [posts] );

  return (
    <Routes>
      <Route path="/" element={<Home posts={posts}  user={user} email={email} setEmail={setEmail} />} />
      <Route path="/login" element={<Login user={user} setUser={setUser}  setEmailpost={setEmail} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
