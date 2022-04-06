import types from "../types"
export const Continue = () => {
    return {
        type: types.LOGIN
    }
}
export const logoutContinue = () => {
    return {
        type: types.USER_LOGOUT
    }
}