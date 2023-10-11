import React from 'react'
import { useState, useEffect } from 'react'
import { getArticle, deleteArticle } from '../services/article-api'
import { useParams, useNavigate } from 'react-router-dom'

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
    <div>
        <h1>Title</h1>
        <h3>{article.title}</h3>
        <input type='text'  />

        </div>
  )
}
