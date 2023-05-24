import React from "react";
import "./Message.css"
import UserIcon from "../User/UserIcon";
import img1 from "../../images/Image.jpg"
import img2 from "../../images/Image-1.jpg"
import img3 from "../../images/Image-2.jpg"

const Message = (props:any) => {
    return (
        <div className={`message ${props.me}`}>
            <div className="message__inner">
                <div className="message__items">
                    <div className="message__items__user">
                        <div className="message__items__user__items"><UserIcon online={'online'}/>
                            <p className="message__items__username me">WoW User</p>
                            <p className="message__items__mtime">Только что</p>
                        </div>
                        <div className="message__copy">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.5 9H18C19.1046 9 20 9.89543 20 11V18C20 19.1046 19.1046 20 18 20H11C9.89543 20 9 19.1046 9 18V17.5M6 15H13C14.1046 15 15 14.1046 15 13V6C15 4.89543 14.1046 4 13 4H6C4.89543 4 4 4.89543 4 6V13C4 14.1046 4.89543 15 6 15Z"
                                    stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="message__item__text">
                        <p className="message__text">Of course, I'd be happy to help. How about a character named
                            Captain Drake? He's a natural born leader with years of experience in space exploration.
                            Here are a few concept arts that might help bring him to life.</p>
                    </div>
                    <div className="message__item__media">
                        <div className="message__item__media__items">
                            <img src={img1} alt=""/>
                            <div className="message__item__media__items__btn">
                                <button className='message__img__btn'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.5 7.5C14.5 8.88071 13.3807 10 12 10C10.6193 10 9.5 8.88071 9.5 7.5C9.5 6.11929 10.6193 5 12 5C13.3807 5 14.5 6.11929 14.5 7.5Z"
                                            fill="#686B6E"/>
                                        <path
                                            d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z"
                                            fill="#686B6E"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="message__item__media__items">
                            <img src={img2} alt=""/>
                            <div className="message__item__media__items__btn">
                                <button className='message__img__btn'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.5 7.5C14.5 8.88071 13.3807 10 12 10C10.6193 10 9.5 8.88071 9.5 7.5C9.5 6.11929 10.6193 5 12 5C13.3807 5 14.5 6.11929 14.5 7.5Z"
                                            fill="#686B6E"/>
                                        <path
                                            d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z"
                                            fill="#686B6E"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="message__item__media__items">
                            <img src={img3} alt=""/>
                            <div className="message__item__media__items__btn">
                                <button className='message__img__btn'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.5 7.5C14.5 8.88071 13.3807 10 12 10C10.6193 10 9.5 8.88071 9.5 7.5C9.5 6.11929 10.6193 5 12 5C13.3807 5 14.5 6.11929 14.5 7.5Z"
                                            fill="#686B6E"/>
                                        <path
                                            d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z"
                                            fill="#686B6E"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Message