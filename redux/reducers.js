import { act } from "react";

let appState = {
    passed_onboarding: false,
    user: null,
}

// Reducer
export function authenReducer(state = appState, action) {
    var new_state = {...state};
    switch (action.action) {
        case "login":
            new_state.user = action.payload
            break;

        case "logout":
            new_state.user = null
            break;
    }
    return new_state;
}
