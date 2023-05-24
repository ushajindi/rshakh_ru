import React, {useState} from "react";
import "../User/User.css"
import "./SideBar.css"
import {findAllByDisplayValue} from "@testing-library/react";
import avatar from "../../images/Avatar.png";
import setting from "../../images/setting.svg";
import group from "../../images/group.png"
import "./Members.css"
import UserIcon from "../User/UserIcon";

const Members = () => {
    const [show,setShow]=useState(false)


    return (
        <div className={`members__inner ${show && 'show'}`}>
            <div className='members'>
                <div className="members__items">
                    <div className="user__avatar__small">
                        <img className="user__avatar__small__img" src={group} alt=""/>
                    </div>
                    <div className="user__id">
                        <p className="user__name">ProCosmos</p>
                        <p className="user__rols">12 пользоваталей</p>
                    </div>
                </div>
                <div className="members__tab"><span onClick={()=>{setShow(!show)}} className='members__tab__item'>{"<"}</span></div>
            </div>
            <div className={`member__tab ${show && 'show__tab'}`}>
                <div className="user__avatar__small mtabs">
                    <div className="mtabs__inner"><UserIcon width="20px"/></div>
                    <div className="user__name mtabs__user">Ushajindi</div>
                </div><div className="user__avatar__small mtabs">
                    <div className="mtabs__inner"><UserIcon width="20px"/></div>
                    <div className="user__name mtabs__user">Ushajindi</div>
                </div><div className="user__avatar__small mtabs">
                    <div className="mtabs__inner"><UserIcon width="20px"/></div>
                    <div className="user__name mtabs__user">Ushajindi</div>
                </div><div className="user__avatar__small mtabs">
                    <div className="mtabs__inner"><UserIcon width="20px"/></div>
                    <div className="user__name mtabs__user">Ushajindi</div>
                </div><div className="user__avatar__small mtabs">
                    <div className="mtabs__inner"><UserIcon width="20px"/></div>
                    <div className="user__name mtabs__user">Ushajindi</div>
                </div><div className="user__avatar__small mtabs">
                    <div className="mtabs__inner"><UserIcon width="20px"/></div>
                    <div className="user__name mtabs__user">Ushajindi</div>
                </div>
            </div>
        </div>
    )
}

export default Members
