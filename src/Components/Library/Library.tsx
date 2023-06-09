import React from "react";
import "./Library.css"
import Post from "../Post/Post";
import PostLayout from "../PostLayout/PostLayout";

const Library=(props:any)=>{
    return(
        <div className='library'>
            <div className="library__inner">
                <div className="library__info">
                    <p className="library__name">Library name</p>
                    <button className="library__btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 7.5C14.5 8.88071 13.3807 10 12 10C10.6193 10 9.5 8.88071 9.5 7.5C9.5 6.11929 10.6193 5 12 5C13.3807 5 14.5 6.11929 14.5 7.5Z" fill="#686B6E"/>
                            <path d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z" fill="#686B6E"/>
                        </svg>
                    </button>
                </div>
                <div  className="library__items">
                    <Post view={props.view}/>
                </div><div className="library__items">
                    <Post view={props.view}/>
                </div><div className="library__items">
                    <Post view={props.view}/>
                </div><div className="library__items">
                    <Post view={props.view}/>
                </div><div className="library__items">
                    <Post view={props.view}/>
                </div><div className="library__items">
                    <Post view={props.view}/>
                </div>
            </div>

        </div>
    )
}
export default Library