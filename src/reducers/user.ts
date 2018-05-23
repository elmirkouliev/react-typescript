import * as actions from "../actions/user";
import { isLoggedIn } from "lib/utilities/user";

export type User = {
    id: string;
    email: string;
    name: string;
    newUser?: boolean;
};

export type UserStore = {
    loggedIn: boolean;
    newUser?: boolean;
    shouldRefresh?: boolean
} & User;

const initialState = {
    loggedIn: isLoggedIn(),
    id: "",
    email: "",
    name: ""
}

/**
 * User reducier
 */
export default function UserReducer(
    state: UserStore = initialState,
    action: any
) : UserStore {
    switch (action.type) {
        case actions.SET_LOGGED_IN:
            return { ...state, loggedIn: action.loggedIn, newUser: action.newUser };
        case actions.STORE_USER:
            return Object.assign({}, state, {
                ...action.user,
                shouldRefresh: false,
            });
        case actions.REFRESH_USER:
            return { ...state, shouldRefresh: true };
        default:
            return state;
    }
};