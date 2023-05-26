import React, {useState} from "react";
import "./Genaral.css"
import User from "../../Components/User/User";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import ChatLayout from "../../Components/ChatLayout/ChatLayout";
import Membersbox from "../../Components/Membersbox/Membersbox";
import Library from "../../Components/Library/Library";
import LibraryLayout from "../../Components/LibraryLayout/LibraryLayout";
import PostLayout from "../../Components/PostLayout/PostLayout";

const General = () => {
    const [activeBox, setActiveBox] = useState({
        mainBox: "chatbox",
        postModal:false
    })
    const postLayoutView=()=>{
        setActiveBox({
            postModal: !activeBox.postModal,
            mainBox: activeBox.mainBox
        })
    }
    const mainBox=()=>{
        switch (activeBox.mainBox) {
            case "chatbox": return <ChatLayout/>
            case "library": return <LibraryLayout view={postLayoutView}/>
            case "lenta": return <div><h1 style={{color:"white"}}>СКОРО</h1></div>
        }
        return <></>
    }

    return (
        <div className="general">
            <div className="general__inner">
                <div className="general__items__sidebar">
                    <SideBar/>
                </div>
                <div className="general__items__topbar">
                    <Topbar activebox={activeBox.mainBox} changeBox={setActiveBox}/>
                </div>
                <div className="general__items__chatlayout">
                    {mainBox()}
                </div>
                <div className="general__items__members">
                    <Membersbox/>
                </div>
            </div>
            <div className={`post__layout__modal ${activeBox.postModal&& "on"}`}>
                <PostLayout view={postLayoutView}/>
            </div>
        </div>
    )
}
export default General