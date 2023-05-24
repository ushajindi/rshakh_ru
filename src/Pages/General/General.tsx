import React from "react";
import "./Genaral.css"
import User from "../../Components/User/User";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import ChatLayout from "../../Components/ChatLayout/ChatLayout";
import Membersbox from "../../Components/Membersbox/Membersbox";

const General =()=>{
    return(
        <div className="general">
            <div className="general__inner">
                <div className="general__items__sidebar">
                    <SideBar/>
                </div>
                <div className="general__items__topbar">
                    <Topbar/>
                </div>
                <div className="general__items__chatlayout">
                    <ChatLayout/>
                </div>
                <div className="general__items__members">
                    <Membersbox/>
                </div>
            </div>
        </div>
    )
}
export default General