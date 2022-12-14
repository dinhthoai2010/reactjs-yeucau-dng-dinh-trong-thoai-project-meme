import { ADD_POST_COMMENT, GET_POST_COMMENT } from "../../constants";
import { mappingComment } from "../../helpers";
import { commentServices } from "../../services/comment"

export const asyGetComment = (id) => {
    return async dispatch => {
        const res = await commentServices.getComment(id)
        const comment = res.data.data;
        const cm = mappingComment(comment)
        console.log(cm)
    }
}

export const reducerGetComment = comment => {
    return {
        type: GET_POST_COMMENT,
        payload: {
            comment
        }
    }
}

export const reducerAddComment = comment => {
    return {
        type: ADD_POST_COMMENT,
        payload: {
            comment
        }
    }
}

export const asyAddComment = (comment) => {
    return async dispatch => {
        try {
            const res = await commentServices.addComment(comment)

            if(res.data.status===200){
                // const comment = await
            }

            console.log(res)
        } catch (error) {
            return error
        }
    }
}