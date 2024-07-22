import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import Settings from "./components/Settings";
import Messages from "./components/Messages";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      {/* <Profile/>   */}
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Blogs" element={<Blog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
