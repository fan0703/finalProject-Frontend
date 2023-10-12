import axios from 'axios'
const baseURL = 'http://localhost:8000/articles'
// const baseURL = 'http://yangfanhewangzheng:kyyMR6mAp7bi4p0w@cluster0.kyae0bq.mongodb.net'
//show all
export const getArticles = ()=>{
    const URL = baseURL
    const response = axios.get(URL)
    return response
}
//show one
export const getArticle = (id)=>{
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//EDIT THE ARTICLE
export const editArticle = (id, updatedArticle) =>{
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedArticle)
    return response
}
//create article
export const createArticle = (article) => {
    const URL = baseURL
    const response = axios.post(URL, article)
    return response
}
//delete
export const deleteArticle = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}