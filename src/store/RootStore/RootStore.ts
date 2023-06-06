import GeneralPageStore from "../GeneralPageStore/GeneralPageStore";
import UserStore from "../UserStore/UserStore";
import ChatStore from "../ChatStore/ChatStore";
import AnotherUsersStore from "../AnotherUsers/AnotherUsersStore";


export default class RootStore {
//   readonly query = new QueryParamsStore();
    readonly GeneralPage = new GeneralPageStore();
    readonly UserStore = new UserStore();
    readonly ChatStore: ChatStore = new ChatStore()
    readonly AnotherUsersStore: AnotherUsersStore = new AnotherUsersStore()
}