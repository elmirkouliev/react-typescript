import { combineReducers } from "redux";
import user, { UserStore } from "./user";
// @ts-ignore
import ui from "./ui";
// @ts-ignore

export type RootStore = {
    ui: any; // TODO: Type this correctly
    user: UserStore;
};

/**
 * The root reducer
 */
// @ts-ignore: Our actions are not compatible with Redux's AnyAction
export default combineReducers<RootStore>({
    ui,
    user
});
