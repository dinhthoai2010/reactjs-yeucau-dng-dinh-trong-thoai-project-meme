import { api } from "./api"

export const postService = {
    getList(params) {
        return api.call().get('/post/getListPagination.php',{params})
    },
    getListByUser(params) {
        return api.token().get('/post/getListPostUserID.php',{params})
    },
    getListCategory () {
        return api.call().get('/categories/index.php')
    },
    uploadImg (data) {
        return api.token().post('/post/addNew.php',data)
    },
    getPostByKey (search) {
        return api.token().get('/post/search.php?query='+search)
    },
    getPost (id) {
        return api.call().get('/post/post.php?postid='+id)
    },
    getListByCat(params){
        return api.call().get('/post/getListByCategory.php', {params})
    } 
}