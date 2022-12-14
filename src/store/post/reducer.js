import { GET_LIST_CATEGORY, GET_LIST_POST, GET_LIST_POST_F, GET_LIST_POST_SEARCH, GET_LIST_POST_USER, GET_POST_DES } from "../../constants";

const intState = {
    listPost: [],
    listCategory: [],
    listPostUser: [],
    PostDes: {},
    postSearch: []
}

function reducer(postState = intState, action) {
    switch (action.type) {
        case GET_LIST_POST_F:
            return {
                ...postState,
                listPost: action.payload.posts
            }
        case GET_LIST_POST:
            return {
                ...postState,
                listPost: [...postState.listPost, ...action.payload.posts]
            }
    
        case GET_LIST_CATEGORY:
            return {
                ...postState,
                listCategory: action.payload.posts
            }

        case GET_LIST_POST_SEARCH:
            return {
                ...postState,
                postSearch: action.payload.posts
            }
        case GET_POST_DES: 
            return {
                ...postState,
                PostDes: action.payload.post
            }
        case GET_LIST_POST_USER: 
            return {
                ...postState,
                listPostUser: action.payload.posts
            }
        default:
            return postState
    }
}

export default reducer;