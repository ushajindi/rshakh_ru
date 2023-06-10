import {messageType} from "../ChatStore/ChatStore";
import {action, makeObservable, observable} from "mobx";
import rootStore from "../RootStore/instanse";
import moment from "moment";


type PrivateFieldsOne = "_Message"
type MessageStoreType = {
    messages: messageType | null,
    messageValue: string,
    chat_id:string
}

export class MessageStore {
    private _Message: MessageStoreType = {
        messages: null,
        messageValue: "",
        chat_id:""
    }


    constructor() {
        makeObservable<MessageStore, PrivateFieldsOne>(this, {
            _Message: observable,
            setMessage: action,
            setMessageValue: action,
        })
    }

    setMessage(message: []) {
    }

    get messageValue() {
        return this._Message.messageValue
    }

    setMessageValue(message: string) {
        this._Message.messageValue = message
    }

    get Message() {
        return this._Message
    }
    setChatid(chatid:string){
        this._Message.chat_id=chatid
    }

    get ChatID(){
        return this._Message.chat_id
    }

    async sendMessage() {
        const sendMessage: messageType = {
            user: rootStore.UserStore.User,
            date: moment().format('DD/MM/YYYY, HH:mm:ss'),
            message:this._Message.messageValue,
            img:[],
        }

        await rootStore.ChatStore.sendMessage(sendMessage,this._Message.chat_id)
        this._Message.messageValue=""
    }


}