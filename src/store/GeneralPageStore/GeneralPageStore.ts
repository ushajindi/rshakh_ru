import {action, computed, makeObservable, observable} from "mobx";
import post from "../../Components/Post/Post";

type  GeneralPage={
    mainBox: string | "library"
    postModal:boolean
}
type PrivateFields = "_activeBox";
export default class GeneralPageStore {
    private _activeBox:GeneralPage={
        mainBox:"library",
        postModal:false
    }
    constructor() {
        makeObservable<GeneralPageStore,PrivateFields>(this,{
            _activeBox:observable,
            setMainBox:action,
            setPostModal:action
        })
    }

    get mainBox(){
        return this._activeBox?.mainBox
    }

    setMainBox(params:string){
        return this._activeBox.mainBox=params
    }
    get postModal(){
        return this._activeBox.postModal
    }
    setPostModal(){
        return this._activeBox.postModal=!this._activeBox.postModal
    }


}