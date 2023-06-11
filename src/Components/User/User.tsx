import React from "react";
import "./User.css"
import "./Mobile.css"
import setting from "../../images/setting.svg"
import avatar from "../../images/Avatar.png"
import UserIcon from "./UserIcon";
import rootStore from "../../store/RootStore/instanse";
import {observer} from "mobx-react-lite";
import UserSetting from "./UserSetting";
const user = rootStore.UserStore

const User =()=>{
    return(
        <div className='user'>
            <div className="user__items">
                <div className="user__avatar__small">
                    <UserIcon src={user.User?.avaimg} width="50px"/>
                </div>
                <div className="user__id">
                    <p className="user__name">{user.User?.name}</p>
                    <p className="user__rols">{user.User?.username}</p>
                </div>
            </div>
            <div className="user__setting"><img onClick={()=>{
                rootStore.GeneralPage.setUserSettingModal(true)
            }} className="user__setting__img" src={setting} alt=""/></div>
        </div>
    )
}

export default observer(User)