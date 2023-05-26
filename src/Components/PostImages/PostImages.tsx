import React from "react";
import "./PostImages.css"
import img1 from "../../images/login_img.jpg"
import ImageBox from "../ImageBox/ImageBox";

const PostImages=(props:any)=>{

    return(
        <div style={{width:props.width}} className='postimage'>
            <div className="postimage__inner">
                <div className="postimage__items">
                    <div className="postimage__data">апрель 12</div>
                    <div className="postimage__inner__img">
                        <div className="postimage__inner__img__items">
                            <ImageBox width={"190px"} src={img1}/>
                            <ImageBox width={"190px"} src={img1}/>
                            <ImageBox width={"190px"} src={img1}/>
                        </div>
                    </div>
                </div> <div className="postimage__items">
                    <div className="postimage__data">апрель 12</div>
                    <div className="postimage__inner__img">
                        <div className="postimage__inner__img__items">
                            <ImageBox width={"190px"} src={img1}/>
                        </div>
                    </div>
                </div> <div className="postimage__items">
                    <div className="postimage__data">апрель 12</div>
                    <div className="postimage__inner__img">
                        <div className="postimage__inner__img__items end">
                            <ImageBox width={"190px"} src={img1}/>
                            <ImageBox width={"190px"} src={img1}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PostImages