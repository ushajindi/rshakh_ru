import React from "react";
import "./Register.css"
import logo from "../../images/Logo (1).svg";
import "../Login/Login.css"
import "../../loyaut/loyaut.css"
import "./mobile.css"
import {NavLink} from "react-router-dom";

const Register =()=>{
    return(
        <div className='window register'>
            <div className="register__inner">
                <div className="register__item">
                    <div className="head__item">
                        <div className="logo">
                            <img src={logo} alt=""/>
                            <p className="logo__text">rshakh.ru </p>
                        </div>
                       <NavLink style={{textDecoration:"none"}} to="/login"><a href="" className="login__link">Войти</a></NavLink>
                    </div>
                    <div className="register__data">
                        <h2 className="register__data__title">Общайтесь со своей командой и воплощайте свои творческие идеи в жизнь</h2>
                        <div className="register__data__item">
                            <div className="register__data__items">
                                <p className='input__text'>Email</p>
                                <input placeholder="Email" className='register__data__input' type="text"/>
                            </div>
                            <div className="register__data__items">
                                <p className='input__text'>имя</p>
                                <input placeholder="Имя" className='register__data__input' type="text"/>
                            </div>
                            <div className="register__data__items">
                                <p className='input__text'>Пароль</p>
                                <input placeholder="Пароль" className='register__data__input' type="text"/>
                            </div>
                            <div className="register__data__items">
                                <p className='input__text'>Повторите Пароль</p>
                                <input placeholder="Повторите Пароль" className='register__data__input' type="text"/>
                            </div>
                            <div className="register__data__items__link">
                                <input className='register__data__items__link__input' type="checkbox"/><p className="register__terms">Принимаю <a className='register__terms__link' href="#">условие пользование</a></p>
                            </div>
                            <div className="register__data__items__btn">
                                <button>Создать Аккаунт</button>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="copyright__items">RSHAHK.RU C2023</div>
                        <div className="copyright__items">Privacy Policy</div>
                    </div>
                </div>
                <div className="register__item img__logo"></div>
            </div>
        </div>
    )
}
export default Register