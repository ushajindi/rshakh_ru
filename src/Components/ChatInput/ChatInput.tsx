import React from "react";
import "./ChatInput.css"

const ChatInput=(props:any)=>{
    return(
        <div style={{width:props.width}} className='chatinput'>
            <div className="chatinput__inner">
                <div className="chatinput__items">
                    <button className="chatinput__items__btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10V11C6 14.3137 8.68629 17 12 17M18 10V11C18 14.3137 15.3137 17 12 17M12 17V21M12 21H16M12 21H8M12 14C10.3431 14 9 12.6569 9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V11C15 12.6569 13.6569 14 12 14Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                </div>
                <div className="chatinput__items">
                    <textarea className="chatinput__items__input" role="textbox" contentEditable></textarea>
                </div>
                <div className="chatinput__items">
                    <button className="chatinput__items__file"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.22183 14.7279L12.7019 9.24784C13.3853 8.56443 14.4934 8.56443 15.1768 9.24784V9.24784C15.8602 9.93126 15.8602 11.0393 15.1768 11.7227L9.6967 17.2028C8.32986 18.5696 6.11379 18.5696 4.74695 17.2028V17.2028V17.2028C3.38012 15.836 3.38012 13.6199 4.74695 12.253L11.2877 5.71231C13.3379 3.66206 16.6621 3.66206 18.7123 5.71231V5.71231C20.7626 7.76256 20.7626 11.0867 18.7123 13.1369L12.1716 19.6777" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                    <button className="chatinput__items__send"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.73084 14.2692L19.2337 4.76642M5.48664 7.99807L17.1349 4.11532C18.8344 3.54883 20.4512 5.16564 19.8847 6.8651L16.0019 18.5134C15.3895 20.3507 12.8613 20.5304 11.9952 18.7981L10.0548 14.9174C9.84447 14.4967 9.50334 14.1555 9.08263 13.9452L5.20188 12.0048C3.46962 11.1387 3.64929 8.61052 5.48664 7.99807Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                </div>
            </div>
        </div>
    )
}

export default ChatInput