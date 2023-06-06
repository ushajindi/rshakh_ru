import {action, makeObservable, observable} from "mobx";
import {SourceMap} from "module";
import {usertype} from "../UserStore/UserStore";
type messageImgType={
        src:string
}
type dateType={
    data:string
    time:string
}
type messageType={
    message:string
    user:usertype
    date:string
    img:messageImgType[]
}| null
export type ChatsType =
    {
        _id: string
        users:usertype[]
        messages:messageType[]
    }
| null
type PrivateFieldsOne="_Chats"
export default class ChatStore {
    private _message={}
private _Chats:ChatsType[]=[]
    constructor() {
    makeObservable<ChatStore,PrivateFieldsOne>(this,{
        _Chats:observable,
        setChats:action
    })
    }

    get Chats():ChatsType[]{
    return this._Chats
    }
    setChats(chats:ChatsType[]){
        console.log(chats)
        chats.map(el=>{
            this._Chats.push(el)
        })
    }


}