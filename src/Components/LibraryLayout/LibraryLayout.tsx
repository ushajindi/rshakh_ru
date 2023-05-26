import React from "react";
import "./LibraryLayout.css"
import Library from "../Library/Library";

const LibraryLayout=(props:any)=>{

    return(
        <div className='librarylayout'>
            <div className="librarylayout__inner">
                <div className="librarylayout__items">
                    <Library view={props.view}/>
                </div><div className="librarylayout__items">
                    <Library view={props.view}/>
                </div><div className="librarylayout__items">
                    <Library view={props.view}/>
                </div><div className="librarylayout__items librarylayout__items__end ">
                    <Library view={props.view}/>
                </div>
            </div>
            <div className="librarylayout__btn">
                <div className="librarylayout__btn__inner">
                    <button className="librarylayout__btn__inner__btn">+</button>
                </div>
            </div>
        </div>
    )
}

export default LibraryLayout