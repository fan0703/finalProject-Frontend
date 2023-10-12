import React from 'react'
import { useState, useEffect } from 'react'
import { getArticle, deleteArticle } from '../services/article-api'
import { useParams, useNavigate } from 'react-router-dom'
import Create from './CreatArticle'
import './articles.css'

export default function Article() {
    const nav = useNavigate() //setting up ourreturn to main page
    const {id} = useParams()//destructuring the id parameter for use
    const [article, setArticle] = useState({})
    useEffect(()=>{
        getArticle(id)//getting the one article from the api using the id
        .then(res => setArticle(res.data))
    },[])

    const deleteTheArticle = ()=>{
        deleteArticle(id).then(()=>nav('/'))
    }
  return (
    // <div>
    //     <h1> New Article</h1>
    //     <h3>{article.title}</h3>
    //     Title: <input type='text' name='title' id='dsc'/><br/>
    //     Description : <input type='text' name='description' id='dsc'/><br />
    //     Markdown :<input type='text' name='title' id='dsc'/> <br />
    //     <input type='submit' name='submit'/>
    //     </div>



    <div>
        <h1>New Article Page</h1>
        <form action={`/:${article._id}/edit`} method='POST'>
        Title: <input type='text' name='title' value= {article.title}/><br/>
         Description : <input type='text' name='description' value = {article.description}/><br />
         Markdown : <input type='text' name='markdown' value = {article.markdown}/><br />
         
         {/* <input type='submit' name='submit' value='Create Markdown'/> */}
        </form>
    <Create />
    </div>
  )
}
