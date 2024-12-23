export function login(userInfo) {
    return {
        type: "login",
        payload: userInfo
    }
}

export function logout() {
    return {
        type: "logout",
        payload: null
    }
}