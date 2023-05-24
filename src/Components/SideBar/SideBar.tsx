import React from "react";
import "./SideBar.css"
import square from '../../images/square.svg'
import add from '../../images/add.svg'
import Members from "./Members";
import User from "../User/User";

const SideBar = () => {
    return (
        <div className='sidebar'>
            <Members/>
            <div className="general_box">
                <h4 className='general_box__title'>ГЛАВНАЯ</h4>
                <ul className="general__box__inner">
                    <li className="general__box__item">
                        <div className="project__box__icon"><i className="gg-search"></i>
                        </div>
                        ПОИСК
                    </li>
                    <li className="general__box__item sidebar__active">
                        <div className="project__box__icon"><i className="gg-desktop"></i>
                        </div>
                        BILLING
                    </li>
                </ul>
            </div>
            <div className="projects__box">
                <h4 className="projects__box__title">PROJECTS</h4>
                <ul className="projects__box__inner">
                    <li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li><li className="projects__box__item sidebar__active">
                        <div className="project__box__icon"><span className="project__icon"></span></div>
                        PROJECT1
                    </li>
                    <li className="projects__box__item projects__box__item__add">
                        <div className="project__box__icon"><img src={add} alt=""/></div>
                        ДОБАВИТЬ
                    </li>
                </ul>
            </div>
            <div className="user__sidebox"> <User/></div>

        </div>
    )
}
export default SideBar