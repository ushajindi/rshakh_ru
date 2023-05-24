import React from "react";
import "./User.css"
import ava from "../../images/Avatar.png"

const UserIcon=(props:any)=>{
    return(
        <div className="user__icon">
            <div style={{width:props.width}} className="icon__user"><img width={props.width} src={ava} alt=""/><span className={props.online}></span></div>

        </div>
    )
}
export default UserIcon