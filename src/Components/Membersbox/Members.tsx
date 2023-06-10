import React from 'react';
import "./members.css"
import rootStore from "../../store/RootStore/instanse";
import UserIcon from "../User/UserIcon";
import {toJS} from "mobx";

const Members = () => {
    return (
        <>
            {
                rootStore.AnotherUsersStore.AnotherUsers?.map(el => {
                    return (
                        <div className="members__membersbox">
                            <div className="members__membersbox__items"><UserIcon width={"50px"} src={el.avaimg} online={'online'}/>
                                <div className="members__membersbox__items__user">
                                    <p className="membersbox__username">{el.username}</p>
                                    <p className="membersbox__user__status">{el.email}</p>
                                </div>

                            </div>
                            <div className="members__membersbox__btn">
                                <div onClick={()=>{
                                    rootStore.ChatStore.setChatIO(el._id,el.username)
                                }} className="members__btn__items">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.99997 8L10.5858 14.5858C11.3668 15.3669 12.6332 15.3669 13.4142 14.5858L20 8.00003M6 21H18C19.6569 21 21 19.6569 21 18V9.00003C21 8.6031 20.8844 8.23317 20.685 7.9221C20.5301 7.68059 20.2863 7.51611 20.0344 7.37882L13.4357 3.78244C12.5407 3.29468 11.4593 3.29468 10.5644 3.78244L3.96559 7.37882C3.71369 7.51611 3.46988 7.68059 3.31505 7.9221C3.11563 8.23317 3 8.6031 3 9.00003V18C3 19.6569 4.34315 21 6 21Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className="members__membersbox__btn__items">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 21C19 17.6863 16.3137 15 13 15H11C7.68629 15 5 17.6863 5 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )
                })

            }

        </>

    );
};

export default Members;