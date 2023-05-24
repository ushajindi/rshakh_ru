import React from "react";
import "./User.css"
import "./Mobile.css"
import setting from "../../images/setting.svg"
import avatar from "../../images/Avatar.png"
import UserIcon from "./UserIcon";

const User =()=>{

    return(
        <div className='user'>
            <div className="user__items">
                <div className="user__avatar__small">
                    <UserIcon width="50px"/>
                </div>
                <div className="user__id">
                    <p className="user__name">Ushajindi</p>
                    <p className="user__rols">Premium</p>
                </div>
            </div>
            <div className="user__setting"><img className="user__setting__img" src={setting} alt=""/></div>
        </div>
    )
}

export default User