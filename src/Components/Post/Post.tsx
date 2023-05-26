import React from "react";
import "./Post.css"
import img1 from "../../images/Image.jpg"
import img2 from "../../images/Image-1.jpg"
import img3 from "../../images/Image-2.jpg"
import UserIcon from "../User/UserIcon";
import PostLayout from "../PostLayout/PostLayout";
import ImageBox from "../ImageBox/ImageBox";

const Post = (props:any) => {
    return (
        <div className='post'>
            <div className="post__inner">
                <div className="post__items">
                    <p onClick={()=>props.view()} className="post__title">Post Title</p>
                </div>
                <div className="post__items">
                    <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="post__items border">
                    <div className="post__items__media">
                        <ImageBox width={"80px"} src={img1}/>
                        <ImageBox width={"80px"} src={img2}/>
                        <ImageBox width={"80px"} src={img3}/>
                    </div>
                </div>
                <div className="post__items">
                    <div className="post__items__members">
                        <div className="post__items__members__count">
                            <div className="post__items__members__count__items">
                                <UserIcon width={'32px'} online={'online'}/>
                            </div>
                            <div className="post__items__members__count__items">
                                <UserIcon width={'32px'} online={'online'}/>
                            </div>
                            <div className="post__items__members__count__items">
                                <UserIcon width={'32px'} online={'offline'}/>
                            </div>
                            <div className="post__items__members__count__items__count">+4</div>
                        </div>
                        <div className="post__items__members__comment">
                            <p>4</p>
                            <svg className='post__items__members__comment__icon' width="24" height="24" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 3H6C4.34315 3 3 4.34315 3 6V15.7574C3 16.553 3.31607 17.3161 3.87868 17.8787L6.71967 20.7197C7.19214 21.1921 8 20.8575 8 20.1893V19C8 17.8954 8.89543 17 10 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3Z"
                                    stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post