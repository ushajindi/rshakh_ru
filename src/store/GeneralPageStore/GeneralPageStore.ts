import {action, computed, makeObservable, observable, toJS} from "mobx";
import post from "../../Components/Post/Post";

type Chats = [
    {
        id: string
        user: {
            id: string | null
            name: string | null
            username: string | null
            email: string | null
            avaimg?: string | null
        },

    }
] | null


type  GeneralPage = {
    activeChatName:string
    activeChatId:string
    mainBox: string | "library"
    postModal: boolean,
    userSettingModal: boolean,
    loading: boolean | true,
    activeChat: [
        {
            id: string
            user: {
                id: string | null
                name: string | null
                username: string | null
                email: string | null
                avaimg?: string | null
            },
            messages: [
                {
                    message: string
                    username: string
                    userid: string
                    avaimg?: string
                    date: string
                    img?: [
                        {
                            src: string
                        }
                    ]
                }
            ] | null
        }
    ] | null
}
type PrivateFields = "_activeBox";
export default class GeneralPageStore {
    private _activeBox: GeneralPage = {
        mainBox: "library",
        loading: false,
        postModal: false,
        userSettingModal: false,
        activeChat: null,
        activeChatName: "",
        activeChatId:""
    }

    constructor() {
        makeObservable<GeneralPageStore, PrivateFields>(this, {
            _activeBox: observable,
            setMainBox: action,
            setPostModal: action,
            setActiveChat: action,
            setUserSettingModal: action,
            setLoading: action,
            setactiveNameChat:action,
            setActiveChatId:action,
        })
    }

    get mainBox() {
        return this._activeBox?.mainBox
    }
    get ActiveChatId(){
        return this._activeBox.activeChatId
    }

    setActiveChatId(chatid:string){
        this._activeBox.activeChatId=chatid
    }

    get activeNameChat(){
        return this._activeBox.activeChatName
    }
    setactiveNameChat(username:string){
        this._activeBox.activeChatName=username
    }
    get loading(): boolean {
        return this._activeBox.loading
    }

    setLoading(load: boolean) {
        this._activeBox.loading = load
    }

    setMainBox(params: string) {
        return this._activeBox.mainBox = params
    }

    get postModal() {
        return this._activeBox.postModal
    }

    get userSettingModal() {
        return this._activeBox.userSettingModal
    }

    setUserSettingModal(value:boolean) {
        this._activeBox.userSettingModal = value
    }

    setPostModal() {
        return this._activeBox.postModal = !this._activeBox.postModal
    }

    setActiveChat(chat: any): void {
        this._activeBox.activeChat = chat
    }

    get activeChat() {
        return this._activeBox.activeChat
    }


}