import React from "react";
import "./Topbar.css"
import share from "../../images/share.svg"
import UserIcon from "../User/UserIcon";
import lenta from "../../images/dashbaord.svg"
import chat from "../../images/mail.svg"
import lib from "../../images/folder.svg"
import User from "../User/User";
import SideBar from "../SideBar/SideBar";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className='topbar__inner'>
                <div className="topbar__content">
                    <h3 className="topbar__title">Orbital Oddysey</h3>
                    <p className="topbar__text">Marketing Campaign for a new TV series Launch</p>
                </div>
                <div className="topbar__user">
                    <div className="topbar__user__inner">
                        <div className="topbar__user__item">
                            <div className="topbar__user__icon"><UserIcon width={"30px"}/></div>
                        </div>
                        <div className="topbar__user__item">
                            <div className="topbar__user__icon"><UserIcon width={"30px"}/></div>
                        </div>
                        <div className="topbar__user__item">
                            <div className="topbar__user__icon"><UserIcon width={"30px"}/></div>
                        </div>
                        <div className="topbar__user__item">
                            <div className="topbar__user__icon"><UserIcon width={"30px"}/></div>
                        </div>
                        <div className="topbar__user__item">
                            <div className="topbar__user__icon"><UserIcon width={"30px"}/></div>
                        </div>
                    </div>
                    <div className="topbar__share">

                    </div>
                </div>
                <div className="topbar__share__inner">
                    <div className="topbar__share__items">
                        <img src={share} alt=""/>Поделиться
                    </div>
                </div>
            </div>
            <div className="topbar__btn">
                <div className="topbar__btn__inner">
                    <div className="topbar__btn__items">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4C3 3.44772 3.44772 3 4 3H9C9.55228 3 10 3.44772 10 4V12C10 12.5523 9.55228 13 9 13H4C3.44772 13 3 12.5523 3 12V4Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 12C14 11.4477 14.4477 11 15 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H15C14.4477 21 14 20.5523 14 20V12Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 4C14 3.44772 14.4477 3 15 3H20C20.5523 3 21 3.44772 21 4V6C21 6.55228 20.5523 7 20 7H15C14.4477 7 14 6.55228 14 6V4Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 18C3 17.4477 3.44772 17 4 17H9C9.55228 17 10 17.4477 10 18V20C10 20.5523 9.55228 21 9 21H4C3.44772 21 3 20.5523 3 20V18Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>ЛЕНТА
                    </div>
                    <div className="topbar__btn__items active">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6L10 12M20 6L14 12M10 12L10.5858 12.5858C11.3668 13.3668 12.6332 13.3668 13.4142 12.5858L14 12M10 12L3.87868 18.1213M14 12L20.1213 18.1213M20.1213 18.1213C20.6642 17.5784 21 16.8284 21 16V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V16C3 16.8284 3.33579 17.5784 3.87868 18.1213M20.1213 18.1213C19.5784 18.6642 18.8284 19 18 19H6C5.17157 19 4.42157 18.6642 3.87868 18.1213" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        ЧАТ
                    </div>
                    <div className="topbar__btn__items">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7.5H12.6499C12.2547 7.5 11.8966 7.26727 11.7361 6.90614L10.8889 5M19 7.5V7.5C20.1046 7.5 21 8.39543 21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9.35013C9.74532 3 10.1034 3.23273 10.2639 3.59386L10.8889 5M19 7.5V6C19 5.44772 18.5523 5 18 5H10.8889" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        БИБЛОТЕКА
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Topbar