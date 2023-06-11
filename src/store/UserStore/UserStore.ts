import {action, makeObservable, observable, toJS} from "mobx";
import {ApiService} from "../../ApiUtills/authService";
import rootStore from "../RootStore/instanse";
import FormData from 'form-data'

export type usertype = {
    _id: string
    name: string
    email: string
    avaimg: string
    username: string
} | null


type userLoginValidate = {
    userName: {
        name: string
        error: string
        validated: boolean
    }
    password: {
        password: string
        error: string
        validated: boolean
    }
    validated: boolean | false,
}
type userRegisterValidate = {
    userName: {
        name: string
        error: string
        validated: boolean
    }
    Email: {
        email: string
        error: string
        validated: boolean
    }
    password: {
        password: string
        error: string
        validated: boolean
    }
    Conpassword: {
        password: string
        error: string
        validated: boolean
    }
    validated: boolean | false,

}

export type UserStoreType = {
    auth: boolean
    loginValidated: userLoginValidate
    userRegisterValidated: userRegisterValidate
    user: usertype
    loading: boolean,
    avaupload:any
}
type PrivateFields = "_UserStore";

export default class UserStore {
    private _UserStore: UserStoreType = {
        user: {
            _id: "",
            name: "",
            username: "",
            email: "",
            avaimg: ""
        },
        loginValidated: {
            userName: {
                name: "",
                error: "",
                validated: false
            },
            password: {
                password: "",
                error: "",
                validated: false
            },
            validated: false
        },
        userRegisterValidated: {
            userName: {
                name: "",
                error: "",
                validated: false
            },
            Email: {
                email: "",
                error: "",
                validated: false
            },
            password: {
                password: "",
                error: "",
                validated: false
            },
            Conpassword: {
                password: "",
                error: "",
                validated: false
            },
            validated: false,
        },
        auth: false,
        loading: false,
        avaupload:{}
    }


    constructor() {
        makeObservable<UserStore, PrivateFields>(this, {
            _UserStore: observable,
            setValidate: action,
            setValidateFocus: action,
            setValidateRegister: action,
            setValidateFocusRegister: action,
            setRegisterValidate: action,
            setLoading: action,
            setAvaUpload:action,
        })
    }

    get User() {
        return this._UserStore.user
    }

    get loading() {
        return this._UserStore.loading
    }

    setLoading(load: boolean) {
        this._UserStore.loading = load
    }
    get avaupload(){
        return this._UserStore.avaupload
    }

    setAvaUpload(file:any){
        this._UserStore.avaupload=file[0]
    }

    async onLoad() {
        const token = localStorage.getItem("token")
        const userid = localStorage.getItem("userid")
        if (token && userid) {
            this.setLoading(true)
            try {
                const authOnLoad = await ApiService.getUser(token, userid)
                if (authOnLoad.status === 200) {
                    this.setUser(authOnLoad.data)
                    this.setAuth(true)
                    const chats = await ApiService.getChats(token, userid)
                    const AnotherUserGet = await ApiService.findAllAnotherUsers(token)
                    rootStore.AnotherUsersStore.setAnotherUsers(AnotherUserGet.data)
                    //rootStore.ChatStore.setChats(chats.data)
                    rootStore.ChatStore.connectSocket(userid)
                    this.setLoading(false)
                }
            } catch (e) {
                this.setLoading(false)
                console.log(e)
            }

        }
    }

    SignOut() {
        localStorage.setItem("token", "")
        localStorage.setItem("userid", "")
        this.setAuth(false)
        this.setUser(null)
    }

    async registration() {
        const email = this._UserStore.userRegisterValidated.Email.email
        const username = this._UserStore.userRegisterValidated.userName.name
        const password = this._UserStore.userRegisterValidated.password.password
        this.setLoading(true)
        const user = await ApiService.Register(email, username, password)
        if (user.data.status === 400) {
            this.userRegisterValidated.Email.error = user.data.message
            this.setLoading(false)
        }
        if (user.status === 201) {
            localStorage.setItem("token", user.data.token)
            localStorage.setItem("userid", user.data.user._id)
            this.setUser(user.data.user)
            this.setAuth(true)
        }

    }
   async updateUser(){
        const token = localStorage.getItem("token")
        const userid = localStorage.getItem("userid")
        const image= new FormData()
        if (this._UserStore.avaupload.name){
            image.append("image",this._UserStore.avaupload)
            image.append("_id",this._UserStore.user?._id)
            const upload = await ApiService.updateUserAvatar(image,token)
            if (upload.status===200){
                await this.onLoad()
            }
        }
    }
    setUser(user: usertype) {
        this._UserStore.user = user
    }

    setAuth(auth: boolean) {
        this._UserStore.auth = auth
    }

    get Auth(): boolean {
        return this._UserStore.auth
    }

    get loginValidated(): userLoginValidate {
        return this._UserStore.loginValidated
    }

    get userRegisterValidated() {
        return this._UserStore.userRegisterValidated
    }

    async Login() {
        try {
            //не забыть типизировать
            const user: any = await ApiService.login(this._UserStore.loginValidated.userName.name, this._UserStore.loginValidated.password.password)
            if (user.status === 201) {
                localStorage.setItem('token', user.data.token);
                localStorage.setItem('userid', user.data.user._id);
                await this.onLoad()
            }


        } catch (error) {
            this._UserStore.loginValidated.userName.error = "Неправильный логин или пароль"
        }
    }

    setValidate(e: string, name: string): void {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        switch (name) {
            case "email": {
                this._UserStore.loginValidated.userName.name = e
                this.setValidateFocus("email")
                break
            }
            case "password": {
                this._UserStore.loginValidated.password.password = e
                this.setValidateFocus("password")
                break
            }
        }
    }

    setValidateFocus(name: string) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        switch (name) {
            case "email": {
                if (!re.test(String(this._UserStore.loginValidated?.userName.name).toLowerCase())) {
                    this._UserStore.loginValidated.userName.error = "Некоректный email"
                    this._UserStore.loginValidated.userName.validated = false
                } else {
                    this._UserStore.loginValidated.userName.error = ""
                    this._UserStore.loginValidated.userName.validated = true
                }

                if (this._UserStore.loginValidated.userName.validated && this._UserStore.loginValidated.password.validated) {
                    this._UserStore.loginValidated.validated = true
                } else {
                    this._UserStore.loginValidated.validated = false
                }
                break
            }
            case "password": {
                if (this._UserStore.loginValidated?.password.password.length === 0) {
                    this._UserStore.loginValidated.password.error = "пароль не можеть быть пустым "
                    this._UserStore.loginValidated.password.validated = false
                }
                if (this._UserStore.loginValidated?.password.password.length < 7) {
                    this._UserStore.loginValidated.password.error = "пароль не можеть быть меньше 8 символов "
                    this._UserStore.loginValidated.password.validated = false
                } else {
                    this._UserStore.loginValidated.password.validated = true
                    this._UserStore.loginValidated.password.error = ""
                }
                if (this._UserStore.loginValidated.userName.validated && this._UserStore.loginValidated.password.validated) {
                    this._UserStore.loginValidated.validated = true
                } else {
                    this._UserStore.loginValidated.validated = false
                }
                break

            }
        }


    }

    setValidateFocusRegister(name: string) {
        if (
            this._UserStore.userRegisterValidated.userName.validated &&
            this._UserStore.userRegisterValidated.password.validated &&
            this._UserStore.userRegisterValidated.userName.validated &&
            this._UserStore.userRegisterValidated.Conpassword.validated
        ) {
            this.setRegisterValidate()
        }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        switch (name) {
            case "email": {
                if (!re.test(this._UserStore.userRegisterValidated.Email.email)) {
                    this._UserStore.userRegisterValidated.Email.error = "Некорктный email "
                    break
                } else {
                    this._UserStore.userRegisterValidated.Email.error = ""
                    this._UserStore.userRegisterValidated.Email.validated = true
                    break
                }
            }
            case "username": {
                if (this._UserStore.userRegisterValidated.userName.name === "") {
                    this._UserStore.userRegisterValidated.userName.error = "Поля не можеть быть пустым"
                    break
                } else {
                    this._UserStore.userRegisterValidated.userName.error = ""
                    this._UserStore.userRegisterValidated.userName.validated = true
                    break
                }
            }

            case "password": {
                if (this._UserStore.userRegisterValidated.password.password.length <= 7) {
                    this._UserStore.userRegisterValidated.password.error = "Поля не можеть быть меньше 8 символов"
                    break
                } else {
                    this._UserStore.userRegisterValidated.password.error = ""
                    this._UserStore.userRegisterValidated.password.validated = true
                    break
                }
            }
            case "conpassword": {
                if (this._UserStore.userRegisterValidated.Conpassword.password === this._UserStore.userRegisterValidated.password.password) {
                    this._UserStore.userRegisterValidated.Conpassword.validated = true
                    this._UserStore.userRegisterValidated.Conpassword.error = ""
                } else {
                    this._UserStore.userRegisterValidated.Conpassword.validated = false
                    this._UserStore.userRegisterValidated.Conpassword.error = "Паролы не совпадают"
                }
            }

        }

    }

    setRegisterValidate() {
        this._UserStore.userRegisterValidated.validated = true
    }

    setValidateRegister(e: string, name: string) {
        if (
            this._UserStore.userRegisterValidated.userName.validated &&
            this._UserStore.userRegisterValidated.password.validated &&
            this._UserStore.userRegisterValidated.userName.validated &&
            this._UserStore.userRegisterValidated.Conpassword.validated
        ) {
            this.setRegisterValidate()
        }
        switch (name) {
            case "email": {
                this._UserStore.userRegisterValidated.Email.email = e
                this.setValidateFocusRegister(name)
                break
            }
            case "username": {
                this._UserStore.userRegisterValidated.userName.name = e
                this.setValidateFocusRegister(name)
                break
            }
            case "password": {
                this._UserStore.userRegisterValidated.password.password = e
                this.setValidateFocusRegister(name)
                break
            }
            case "conpassword": {
                this._UserStore.userRegisterValidated.Conpassword.password = e
                this.setValidateFocusRegister(name)
                break
            }
        }
    }


}