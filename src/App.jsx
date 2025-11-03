import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

function App() {
  const [selectTab, setSelectTab] = useState("View Post");

  const tabChange = (tab) => {
    if (tab === "View Post") {
      console.log(tab);
      setSelectTab("View Post");
    } else if (tab === "Create Post") {
      console.log(tab);
      setSelectTab("Create Post");
    }
  };
  return (
    <div className="app-container">
      <Sidebar tabChange={selectTab} tabChange1={tabChange} />
      <div className="content">
        <Header />
        {selectTab === "View Post" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
