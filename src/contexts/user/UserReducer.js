import { GET_USERS, GET_PROFILE } from "../types";

const actions = (state, action) => {
    const { payload, type } = action

    // eslint-disable-next-line default-case
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }
        default:
            return state
    }
}

export default actions