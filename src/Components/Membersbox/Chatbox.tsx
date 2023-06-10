import React from 'react';
import "./Membersbox.css"
import rootStore from "../../store/RootStore/instanse";
import UserIcon from "../User/UserIcon";
import {observer} from "mobx-react-lite";

const Chatbox = () => {
    return (
        <>
            {
                rootStore.ChatStore.Chats?.map((el=>{
                    return(
                        <>
                            {
                                el?.users.map(users=>{
                                    if (users?._id!=rootStore.UserStore.User?._id){
                                        return <div onClick={(e)=>{
                                            rootStore.GeneralPage.setMainBox("chatbox")
                                            rootStore.GeneralPage.setActiveChat(el?.messages)
                                            rootStore.GeneralPage.setactiveNameChat(users?.username?users.username:"")
                                            rootStore.MessageStore.setChatid(el._id)
                                            rootStore.GeneralPage.setActiveChatId(el?._id)
                                        } } className="membersbox__items" key={el?._id}>
                                            <UserIcon width={"50px"} src={users?.avaimg} online={'online'}/>
                                            <div className="membersbox__item__user">
                                                <p className="membersbox__username">{users?.username}</p>
                                                <p className="membersbox__user__status">{users?.email}</p>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </>
                    )
                }))
            }
        </>
    );
};

export default observer(Chatbox);