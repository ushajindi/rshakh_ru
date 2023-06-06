import React, {ReactEventHandler, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css"
import logo from "../../images/Logo (1).svg"
import email from "../../images/email.svg"
import pass from "../../images/pass.svg"
import google from "../../images/google.svg"
import apple from "../../images/apple.svg"
import "../../loyaut/loyaut.css"
import "./mobile.css"
import {Form, NavLink} from "react-router-dom";
import rootStore from "../../store/RootStore/instanse";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import Loader from "../../Components/Loader/Loader";
const validate = rootStore.UserStore.loginValidated
const validateFunc = rootStore.UserStore


const Login = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        validateFunc.onLoad()
    },[])
    useEffect(()=>{
        if (rootStore.UserStore.Auth){
            navigate('/')
        }
    },[rootStore.UserStore.Auth])
    return (
        <>

            {validateFunc.loading?<Loader/>:<div className="login window">
                <div className="login__inner">
                    <div className="login__items">
                        <div className="logo">
                            <img src={logo} alt=""/>
                            <p className="logo__text">rshakh.ru </p>
                        </div>
                        <div className="login__area">
                            <h3 className="login__title">С нами</h3><p className="login__title__bold">вдохновение</p>
                        </div>
                        <p className="login__text">Войди чтобы попасть в магический мир!</p>
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            validateFunc.Login()
                        }}   className="login__data">
                            <div className="login__input">
                                <p className='error__item' style={{color:"red"}}>{validate?.userName.error}</p>
                                <input onBlur={()=>validateFunc.setValidateFocus("email")} onChange={event => {validateFunc.setValidate(event.target.value,"email")}} value={validate?.userName.name} placeholder="Email" type="text"/>
                                <img src={email} alt=""/></div>
                            <div className="login__input">
                                <p className='error__item' style={{color:"red"}}>{validate?.password.error}</p>
                                <input onChange={event => {validateFunc.setValidate(event.target.value,"password")}} onBlur={()=>validateFunc.setValidateFocus("password")} value={validate?.password.password} placeholder="Введите пароль" type="text"/>
                                <img src={pass} alt=""/></div>
                            <div className="login__forgot">
                                <div className="remember"><input type="checkbox"/> Запомнить меня</div>
                                <a className="login__forgot__btn" href="#">Забыли пароль</a>

                            </div>
                            <button  disabled={!validate.validated} type="submit" className="login__btn">Войти</button>
                            <div className="text_decor">
                                <span></span>Можете авторизоваться через <span></span>
                            </div>

                            <div className="login__auth__btn">
                                <div className="login__auth__btn__item">
                                    <button>
                                        <img src={google} alt=""/>
                                        Google Account
                                    </button>
                                </div>
                                <div className="login__auth__btn__item">
                                    <button>
                                        <img src={apple} alt=""/>
                                        Apple Account
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="login__foter">
                            <p className="login__footer__text">У вас не аккаунта?</p>
                            <NavLink style={{textDecoration:"none"}} to="/register"><a href="#" className="login__footer__link">регистрация</a></NavLink>
                        </div>

                    </div>
                    <div className="img__logo"></div>


                </div>
            </div>



            }
        </>
    )
}
export default observer(Login)