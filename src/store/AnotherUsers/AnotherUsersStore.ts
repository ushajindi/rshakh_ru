import {action, makeObservable, observable} from "mobx";
import rootStore from "../RootStore/instanse";

type AnotherUserType = {
    _id: string
    username: string
    email: string
    avaimg: string
}
type AnotherUsersType={
    users:AnotherUserType[]|null
}
type PrivateFields = "_AnotherUsersStore"
export default class AnotherUsersStore {
    private _AnotherUsersStore:AnotherUsersType={
        users:[]
    }

    constructor() {
        makeObservable<AnotherUsersStore,PrivateFields>(this,{
            _AnotherUsersStore:observable,
            setAnotherUsers:action,
        })
    }

    setAnotherUsers(users:AnotherUserType[]){
        this._AnotherUsersStore.users=users
    }

    get AnotherUsers(){
        return (
            this._AnotherUsersStore.users?.filter(el=>{
                return el._id!==rootStore.UserStore.User?._id
            })
        )

    }

}