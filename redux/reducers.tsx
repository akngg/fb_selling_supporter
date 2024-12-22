
import { appState } from './store'

// Reducer
export function authReducer(state = appState, action : any) {
    switch (action.action) {
        case "login":
            state = {
                ...appState,
                access_token: null,
                user: {
                    name: null,
                    picture: null,
                }
            }
            break;

        case "logout":
            state = {
                ...appState,
                access_token: null,
                user: {
                    name: null,
                    picture: null,
                }
            }
            break;
    }
    return state;
}
