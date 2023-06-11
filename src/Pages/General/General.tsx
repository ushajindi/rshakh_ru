import React, { useEffect, useRef, useState } from "react";
import "./Genaral.css";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import ChatLayout from "../../Components/ChatLayout/ChatLayout";
import Membersbox from "../../Components/Membersbox/Membersbox";
import LibraryLayout from "../../Components/LibraryLayout/LibraryLayout";
import PostLayout from "../../Components/PostLayout/PostLayout";
import { observer } from "mobx-react-lite";
import rootStore from "../../store/RootStore/instanse";
import { useNavigate } from "react-router-dom";
import UserSetting from "../../Components/User/UserSetting";
import Loader from "../../Components/Loader/Loader";
import "./mobileGeneralPage.css";

const General = () => {
    const [on, setOn] = useState(false);
    const slideRef = useRef<HTMLDivElement>(null);
    const membersboxRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!rootStore.UserStore.Auth) {
            navigate("/login");
        }
    }, [rootStore.UserStore.Auth]);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            membersboxRef.current &&
            !membersboxRef.current.contains(event.target as Node)
        ) {
            setOn(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        const touchStartX = event.touches[0].clientX;
        if (slideRef.current) {
            slideRef.current.dataset.touchStartX = touchStartX.toString();
        }
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        const touchStartX = slideRef.current?.dataset.touchStartX;
        const touchEndX = event.changedTouches[0].clientX;
        if (touchStartX) {
            const parsedTouchStartX = parseFloat(touchStartX);
            const touchDiff = touchEndX - parsedTouchStartX;
            if (touchDiff > 50) {
                if (on){
                    setOn(false);
                } else {
                    rootStore.GeneralPage.setUserSettingModal(true)
                }
                // Скрыть Membersbox при свайпе вправо
            } else if (touchDiff < -50) {
                if (rootStore.GeneralPage.userSettingModal){
                    rootStore.GeneralPage.setUserSettingModal(false)
                } else {
                    setOn(true)
                }
                ;// Показать Membersbox при свайпе влево
            }
        }
    };

    const mainBox = () => {
        switch (rootStore.GeneralPage.mainBox) {
            case "chatbox":
                return <ChatLayout />;
            case "library":
                return <LibraryLayout />;
            case "lenta":
                return <div><h1 style={{color:"white"}}>СКОРО</h1></div>;
            default:
                break;
        }
        return <></>;
    };

    return (
        <>
            {rootStore.GeneralPage.loading ? (
                <Loader />
            ) : (
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    ref={slideRef}
                    className="general"
                >
                    <div className="general__inner">
                        <div className="general__items__sidebar">
                            <SideBar />
                        </div>
                        <div className="general__items__topbar">
                            <Topbar />
                        </div>
                        <div className="general__items__chatlayout">{mainBox()}</div>
                        <div
                            ref={membersboxRef}
                            className={`general__items__members ${on && "on"}`}
                        >
                            <Membersbox />
                        </div>
                    </div>
                    <div className={`post__layout__modal ${rootStore.GeneralPage.postModal && "on"}`}>
                        <PostLayout />
                    </div>
                    <div className={`usersetting__layout__modal ${rootStore.GeneralPage.userSettingModal && "on"}`}>
                        <UserSetting />
                    </div>
                </div>
            )}
        </>
    );
};

export default observer(General);
