import React from "react";
import "./Message.css"
import UserIcon from "../User/UserIcon";
import {toJS} from "mobx";
import ImageBox from "../ImageBox/ImageBox";
import {observer} from "mobx-react-lite";
import rootStore from "../../store/RootStore/instanse";

const Message = (props:any) => {
    return (
        <div style={{width:props.width}} className={`message ${rootStore.UserStore.User?._id===props.messages.user._id?"me":""}`}>
            <div className="message__inner">
                <div className="message__items">
                    <div className="message__items__user">
                        <div className="message__items__user__items"><UserIcon width={"50px"} src={props.messages?.avaimg} online={'online'}/>
                            <p className="message__items__username">{props.messages.user.username}</p>
                            <p className="message__items__mtime">{props.messages.date}</p>
                        </div>
                        <div className="message__copy">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.5 9H18C19.1046 9 20 9.89543 20 11V18C20 19.1046 19.1046 20 18 20H11C9.89543 20 9 19.1046 9 18V17.5M6 15H13C14.1046 15 15 14.1046 15 13V6C15 4.89543 14.1046 4 13 4H6C4.89543 4 4 4.89543 4 6V13C4 14.1046 4.89543 15 6 15Z"
                                    stroke="#686B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="message__item__text">
                        <p className="message__text">{props.messages.message}</p>
                    </div>
                    <div className="message__item__media">
                        {
                            props.messages.img&&
                            props.messages.img.map((e:any)=>{
                                return(
                                    <div className="message__item__media__items">
                                        <ImageBox width={"150px"} src={e.src}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default observer(Message)