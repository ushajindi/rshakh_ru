import React, {EffectCallback, useEffect, useState} from "react";
import "./Genaral.css"
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import ChatLayout from "../../Components/ChatLayout/ChatLayout";
import Membersbox from "../../Components/Membersbox/Membersbox";
import LibraryLayout from "../../Components/LibraryLayout/LibraryLayout";
import PostLayout from "../../Components/PostLayout/PostLayout";
import {observer} from "mobx-react-lite";
import rootStore from "../../store/RootStore/instanse";
import {useNavigate} from "react-router-dom";
import UserSetting from "../../Components/User/UserSetting";
import Loader from "../../Components/Loader/Loader";

const General = () => {
    const navigate=useNavigate()
    useEffect( ():any=>{
        if (!rootStore.UserStore.Auth){
            navigate('/login')
        }
    },[rootStore.UserStore.Auth])
    const mainBox=()=>{
        switch (rootStore.GeneralPage.mainBox) {
            case "chatbox": return <ChatLayout/>
            case "library": return <LibraryLayout/>
            case "lenta": return <div><h1 style={{color:"white"}}>СКОРО</h1></div>
            default:
                break;
        }
        return <></>
    }

    return (
        <>

            {
                rootStore.GeneralPage.loading?<Loader/>:<div className="general">
                    <div className="general__inner">
                        <div className="general__items__sidebar">
                            <SideBar/>
                        </div>
                        <div className="general__items__topbar">
                            <Topbar />
                        </div>
                        <div className="general__items__chatlayout">
                            {mainBox()}
                        </div>
                        <div className="general__items__members">
                            <Membersbox/>
                        </div>
                    </div>
                    <div className={`post__layout__modal ${rootStore.GeneralPage.postModal&& "on"}`}>
                        <PostLayout/>
                    </div>
                    <div className={`usersetting__layout__modal ${rootStore.GeneralPage.userSettingModal&&"on"}`}>
                        <UserSetting/>
                    </div>
                </div>
            }


        </>
    )
}
export default observer(General)