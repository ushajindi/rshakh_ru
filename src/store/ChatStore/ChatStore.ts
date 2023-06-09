import {action, makeObservable, observable} from "mobx";
import {SourceMap} from "module";
import {usertype} from "../UserStore/UserStore";
import io from 'socket.io-client';
const token = localStorage.getItem("token")
const userid = localStorage.getItem("userid")
const socket=io('http://localhost:3002', {
    query: { _id: userid }
});
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
        userid:string
    }
| null
type PrivateFieldsOne="_Chats"

export default class ChatStore {

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
       // chats.map(el=>{
        //    this._Chats.push(el)
       // })
        this._Chats=chats
    }
    setChatIO(anotherUserid:string){
    socket.emit("chats",{
        another_id:anotherUserid
    })
    }
    connectSocket(userid:any){
    const events:any=[]
        const socket=io('http://localhost:3002', {
            query: { _id: userid }
        });

       socket.on('connect',()=>{
            console.log("connect")
        })
        socket.on(userid,(data:any)=>{
            console.log(data)
            if (!(data.chats.length===0)){
                this.setChats(data.chats)
                data.chats.map((el:any)=>{
                    events.push(el._id.toString())
                })
            }
        })
        console.log(events)
    }


/*socketDisconnect(){
    // Отключение от сервера при размонтировании компонента
    socket.disconnect();*/

}