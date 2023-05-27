import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import User from "./Components/User/User";
import SideBar from "./Components/SideBar/SideBar";
import Topbar from "./Components/Topbar/Topbar";
import Membersbox from "./Components/Membersbox/Membersbox";
import ChatInput from "./Components/ChatInput/ChatInput";
import ChatLayout from "./Components/ChatLayout/ChatLayout";
import General from "./Pages/General/General";
import Post from "./Components/Post/Post";
import LibraryLayout from "./Components/LibraryLayout/LibraryLayout";
import PostLayout from "./Components/PostLayout/PostLayout";
import PostImages from "./Components/PostImages/PostImages";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/general" Component={General}/>
            <Route path="/login" Component={Login}/>
            <Route path="/register" Component={Register}/>
        </Routes>

    </div>
  );
}

export default App;
