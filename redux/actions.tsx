export function login(access_token: string) {
    return {
        action: "login",
        payload: access_token
    }
}

export function logout() {
    return {
        action: "logout",
        payload: null
    }
}