import React, {useEffect} from "react";
import "./Register.css"
import logo from "../../images/Logo (1).svg";
import "../Login/Login.css"
import "../../loyaut/loyaut.css"
import "./mobile.css"
import {NavLink, useNavigate} from "react-router-dom";
import rootStore from "../../store/RootStore/instanse";
import {observer} from "mobx-react-lite";
import Loader from "../../Components/Loader/Loader";
const validation=rootStore.UserStore.userRegisterValidated
const userStore=rootStore.UserStore

const Register =()=>{
    const navigate=useNavigate()
    useEffect(()=>{
        if (userStore.Auth){
            navigate("/")
            window.location.reload();
        }
    },[userStore.Auth])
    return(
       <>
           {
              userStore.loading?<Loader/>: <div className='window register'>
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
                              <form onSubmit={(e)=> {
                                  e.preventDefault()
                                  userStore.registration()
                              }
                              } className="register__data__item">
                                  <div className="register__data__items">
                                      <p className='input__text'>Email <span style={{color:"red"}}>{validation.Email.error}</span></p>
                                      <input onChange={(e)=>{
                                          userStore.setValidateRegister(e.target.value,"email")
                                      }}
                                             onBlur={()=>{
                                                 userStore.setValidateFocusRegister("email")
                                             }
                                             }
                                             value={validation.Email.email} placeholder="Email" className='register__data__input' type="text"/>
                                  </div>
                                  <div className="register__data__items">
                                      <p className='input__text'>имя <span style={{color:"red"}}>{validation.userName.error}</span></p>
                                      <input
                                          onChange={(e)=>{
                                              userStore.setValidateRegister(e.target.value,"username")
                                          }}
                                          onBlur={()=>{
                                              userStore.setValidateFocusRegister("username")
                                          }
                                          }

                                          value={validation.userName.name}  placeholder="Имя" className='register__data__input' type="text"/>
                                  </div>
                                  <div className="register__data__items">
                                      <p className='input__text'>Пароль <span style={{color:"red"}}>{validation.password.error}</span></p>
                                      <input
                                          onChange={(e)=>{
                                              userStore.setValidateRegister(e.target.value,"password")
                                          }}
                                          onBlur={()=>{
                                              userStore.setValidateFocusRegister("password")
                                          }
                                          }
                                          value={validation.password.password} placeholder="Пароль" className='register__data__input' type="text"/>
                                  </div>
                                  <div className="register__data__items">
                                      <p className='input__text'>Повторите Пароль <span style={{color:"red"}}>{validation.Conpassword.error}</span></p>
                                      <input
                                          onChange={(e)=>{
                                              userStore.setValidateRegister(e.target.value,"conpassword")
                                          }}
                                          onBlur={()=>{
                                              userStore.setValidateFocusRegister("conpassword")
                                          }
                                          }

                                          value={validation.Conpassword.password} placeholder="Повторите Пароль" className='register__data__input' type="text"/>
                                  </div>
                                  <div className="register__data__items__link">
                                      <input className='register__data__items__link__input' type="checkbox"/><p className="register__terms">Принимаю <a className='register__terms__link' href="#">условие пользование</a></p>
                                  </div>
                                  <div className="register__data__items__btn">
                                      <button disabled={!validation.validated} type="submit">Создать Аккаунт</button>
                                  </div>
                              </form>
                          </div>
                          <div className="copyright">
                              <div className="copyright__items">RSHAHK.RU C2023</div>
                              <div className="copyright__items">Privacy Policy</div>
                          </div>
                      </div>
                      <div className="register__item img__logo"></div>
                  </div>
              </div>
           }

       </>
    )
}
export default observer(Register)