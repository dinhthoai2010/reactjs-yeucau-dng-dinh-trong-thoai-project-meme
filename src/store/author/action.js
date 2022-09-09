import { ACCESS_TOKEN, ACT_LOGIN_SUCCESS } from "../../constants";
import { authorService } from "../../services/author"

export function asyLogin(params) {
    return async (dispatch) => {
        try {
            const response = await authorService.login(params);
            const token = response.data.token;
            dispatch(reducerLogin(response.data.user, token))
            return {
                ok: response.data.status,
                user: response.data.user
            }
        } catch (error) {
            return {
                ok: false,
                error: "username hoac pass khong dung"
            }
        }
    }
}


export function asyFetchMe() {
    return async dispatch => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        try {
            const res = await authorService.fetchMe(token)
            const user = res.data.user;

            if(user.id!==undefined){
                getUserById(user.id)
            }
            dispatch(reducerLogin(user, token))
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
}

function getUserById(id) {
    return async dispatch  => {
        try {
            const user = authorService.getUser(id);
            return user.data.user
        } catch (error) {
            
        }
    }
}

function reducerLogin(user, token) {
    return {
        type: ACT_LOGIN_SUCCESS,
        payload: {
            user,
            token
        }
    }
}