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
                        <div className="members">
                            <div className="members__items"><UserIcon width={"50px"} src={el.avaimg} online={'online'}/>
                            </div>
                            <div className="members__items">
                                <p className="membersbox__username">{el.username}</p>
                                <p className="membersbox__user__status">{el.email}</p>
                            </div>
                        </div>
                    )
                })

            }

        </>

    );
};

export default Members;