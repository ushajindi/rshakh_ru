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

function App() {
  return (
    <div className="App">
       <General/>
    </div>
  );
}

export default App;
