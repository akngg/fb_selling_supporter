import { createStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers'

// State
export const appState = {
    passed_onboarding: false,
    access_token: null,
    user: {
        name: null,
        picture: null,
    },
    current_content: null,
    
    groups: [
        // {
        //     id: null,
        //     name: null,
        // }
    ],
    posts: [
        // {
        //     id: null,
        //     message: null,
        //     likes: 0,
        //     comments: 0,
        //     shares: 0,
        // }
    ]
}

// Store
export const store = createStore(authReducer, appState);