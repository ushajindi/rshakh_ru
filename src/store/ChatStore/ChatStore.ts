import {action, makeObservable, observable, toJS} from "mobx";
import {usertype} from "../UserStore/UserStore";
import io from 'socket.io-client';
import rootStore from "../RootStore/instanse";
export type messageImgType={
        src:string
}
export type dateType={
    data:string
    time:string
}
export type messageType={
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
        setChats:action,
        updateMessages:action,
    })
    }

   Socket(){
       const token = localStorage.getItem("token")
    if (token){
        return io(`localhost:3002/?token=${token}`)
    }
    return io().disconnect()

    }
    get Chats():ChatsType[]{
    return this._Chats
    }
    setChats(chats:ChatsType[]){
        this._Chats=chats
    }
    async setChatIO(anotherUserid:string,username:string){
    await this.Socket().emit("chats",{
        another_id:anotherUserid
    })
        const filteredData = this._Chats.filter((item) => {
            return item?.users.some((user) => user?._id === anotherUserid);
        });

    if (filteredData.length===0){
       rootStore.GeneralPage.setLoading(true)
        this.isLoadingChat(anotherUserid,username)
    } else {
       rootStore.UserStore.setLoading(false)
        filteredData.map(el=>{
            rootStore.GeneralPage.setActiveChatId(el?._id?el._id:"")
            rootStore.MessageStore.setChatid(el?._id?el._id:"")
        })
        rootStore.GeneralPage.setMainBox("chatbox")

        rootStore.GeneralPage.setactiveNameChat(username)
    }
    }
    isLoadingChat(anotherUserid:any,username:string){

        setTimeout(()=>{

            const filteredData = this._Chats.filter((item) => {
                return item?.users.some((user) => user?._id === anotherUserid);
            });
            if (filteredData.length===0){
                console.log("Ошибка при создания чата")
            } else {
                filteredData.map(el=>{
                    rootStore.MessageStore.setChatid(el?._id?el._id:"")
                    rootStore.GeneralPage.setActiveChatId(el?._id?el._id:"")
                })
                rootStore.GeneralPage.setLoading(false)
                rootStore.GeneralPage.setMainBox("chatbox")
                rootStore.GeneralPage.setactiveNameChat(username)
            }

        },2000)
    }
    sendMessage(message:any,chatId:string){
    this.Socket().emit("message",{
        message:message,
        chatid:chatId
    })
    }
    updateMessages(messages:messageType,chatid:string){
        this._Chats.forEach((chat) => {
            if (chat?._id===chatid){
                chat?.messages.push(messages);
            }

        })
    }
    async connectSocket(userid:any){
       this.Socket().on("connect",()=>{
       })
        this.Socket().emit("getChats","")
    const events:any=[]
      await this.Socket().on(userid,(data:any)=>{
            if (!(data.chats.length===0)){
                this.setChats(data.chats)
                data.chats.map((el:any)=>{
                    events.push(el._id.toString())
                })
                events.map(((event:any)=>{
                    this.Socket().on(event,(data:any)=>{
                      if (data) {
                            this.updateMessages(data.message, data.chatid)
                        }
                    })
                }))
            }
        })

    }

    SocketDisconnect=()=>{
    this.Socket().disconnect()
    }




}