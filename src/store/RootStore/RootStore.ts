import GeneralPageStore from "../GeneralPageStore/GeneralPageStore";


export default class RootStore {
//   readonly query = new QueryParamsStore();
    readonly GeneralPage = new GeneralPageStore();
}