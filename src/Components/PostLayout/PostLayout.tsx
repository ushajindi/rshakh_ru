import React, {useState} from "react";
import "./PostLoyout.css"
import ChatLayout from "../ChatLayout/ChatLayout";
import PostImages from "../PostImages/PostImages";
import rootStore from "../../store/RootStore/instanse";

const PostLayout = (props:any) => {
    const [layout,setLayout]=useState({
        width:"50vw",
        active:"chatbox"
    })
    const mainBox=()=>{
        switch (layout.active) {
            case "chatbox": return <ChatLayout chatname={"none"} width={layout.width}/>
            case "images": return <PostImages width={layout.width}/>
        }

        return(
            <></>
        )
    }
    return (
        <div style={{width:layout.width}} className="postlayout">
            <div className="postlayout__inner">
                <div className="postlayout__nav">
                    <div className="postlayout__nav__info">
                        <div className="postlayout__nav__title">Library title
                            <p className="postlayout__nav__text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.</p>
                        </div>
                        <div className="postlayout__nav__title__btn">
                            <button
                                onClick={()=>{
                                    if (layout.width==="50vw"){
                                       setLayout({width: "90vw",active:layout.active})
                                    } else{
                                        setLayout({width: "50vw",active:layout.active})
                                    }
                                }
                            }

                                className="postlayout__nav__title__btn__btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.5354 3.46445L21.0068 8.6499M20.5354 3.46445L15.35 2.99304M20.5354 3.46445L14 9.99987M3.93576 20.0641L3.46436 14.8787M3.93576 20.0641L9.12121 20.5355M3.93576 20.0641L9.99988 14"
                                        stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button
                                onClick={()=>rootStore.GeneralPage.setPostModal()}
                                className="postlayout__nav__title__btn__btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L19 19M19 5L5 19" stroke="#686B6E" stroke-width="1.5"
                                          stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="postlayout__nav__btn">
                        <div className="postlayout__nav__btn__inner">
                            <div
                                onClick={()=>{
                                    setLayout({width: layout.width,active: "chatbox"})
                                }}
                                className={`postlayout__nav__btn__items ${layout.active==="chatbox" && "active"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21H12Z"
                                        stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                ЧАТ
                            </div>
                            <div
                                onClick={()=>{
                                    setLayout({width: layout.width,active: "images"})
                                }}
                                className={`postlayout__nav__btn__items ${layout.active==="images" && "active"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3 16V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V16M3 16V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V16M3 16L7.58579 11.4142C8.36683 10.6332 9.63317 10.6332 10.4142 11.4142L14 15M17 18L14 15M14 15L15.5858 13.4142C16.3668 12.6332 17.6332 12.6332 18.4142 13.4142L21 16M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"
                                        stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                                Картинки
                            </div>
                            <div
                                onClick={()=>{
                                    setLayout({width: layout.width,active: "comment"})
                                }}
                                className={`postlayout__nav__btn__items ${layout.active==="comment" && "active"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7.03875C7.64632 17 8.22094 17.2762 8.60049 17.7506L10.4383 20.0478C11.2389 21.0486 12.7611 21.0486 13.5617 20.0478L15.3995 17.7506C15.7791 17.2762 16.3537 17 16.9612 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                Комментарии
                            </div>
                        </div>
                    </div>
                </div>
                <div className="postloyout__main">
                    {mainBox()}
                </div>
            </div>
        </div>
    )
}

export default PostLayout