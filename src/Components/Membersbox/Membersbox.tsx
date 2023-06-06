import React, {useState} from "react";
import './Membersbox.css'
import {observer} from "mobx-react-lite";
import Chatbox from "./Chatbox";
import Members from "./Members";

const Membersbox = () => {
    const [active,setActive]=useState("Chatbox")
    return (
        <div className='membersbox'>
            <div className="membersbox__inner">
                {
                    active==="Chatbox"&&<Chatbox/>
                }
                {
                    active==="members"&&<Members/>
                }

            </div>
            <div className="membersbox__btn">
                <div className="membersbox__btn__inner">
                    <div onClick={()=>{setActive("Chatbox")}} className={`membersbox__btn__item ${active==="Chatbox"&&"active"}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 3H6C4.34315 3 3 4.34315 3 6V15.7574C3 16.553 3.31607 17.3161 3.87868 17.8787L6.71967 20.7197C7.19214 21.1921 8 20.8575 8 20.1893V19C8 17.8954 8.89543 17 10 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
                        </svg><p>ЧАТЫ</p>
                    </div>
                    <div onClick={()=>{setActive("members")}} className={`membersbox__btn__item ${active==="members"&&"active"}`}>
                        <p>УЧАСТНИКИ</p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20C12 17.7909 10.2091 16 8 16H6C3.79086 16 2 17.7909 2 20M22 17C22 14.7909 20.2091 13 18 13H16C14.8053 13 13.7329 13.5238 13 14.3542M10 10C10 11.6569 8.65685 13 7 13C5.34315 13 4 11.6569 4 10C4 8.34315 5.34315 7 7 7C8.65685 7 10 8.34315 10 10ZM20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default observer(Membersbox)