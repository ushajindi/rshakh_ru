import React, {useEffect} from 'react';
import "./usersetting.css"
import rootStore from "../../store/RootStore/instanse";
import UserIcon from "./UserIcon";
import {observer} from "mobx-react-lite";
const UserSetting = () => {
    return (
        <div className="usersetting">
            <div onClick={()=>{
                rootStore.GeneralPage.setUserSettingModal(false)
            }} className="usersetting__close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L19 19M19 5L5 19" stroke="#686B6E" strokeWidth="1.5" strokeLinecap="round"></path></svg>
            </div>
           <form onSubmit={(e)=>{
               e.preventDefault()
               rootStore.UserStore.updateUser()
           }} className="usersetting__inner">
               <div className="usersetting__items__image"><UserIcon src={rootStore.UserStore.User?.avaimg} width="100px"/>
                   <input onChange={(e)=>{
                       rootStore.UserStore.setAvaUpload(e.target.files)
                   }} className="usersetting__image" type="file"
                          name="avatar"
                          accept="image/png, image/jpeg"/>
               </div>
               <div className="usersetting__items">
                   <input value={rootStore.UserStore.User?.email} type="text"/>
                   <input value={rootStore.UserStore.User?.username} type="text"/>
               </div>
               <div className="usersetting__items">
                   <button disabled={!rootStore.UserStore.avaupload.name} type="submit" className="usersetting__items__btn">Изменить</button>
                   <button  onClick={()=>{
                       rootStore.ChatStore.SocketDisconnect()
                       rootStore.UserStore.SignOut()

                   }} className="usersetting__items__btn signout">Выход</button>
               </div>
           </form>
        </div>
    );
};

export default observer(UserSetting);