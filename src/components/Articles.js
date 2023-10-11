import React from 'react'
import { getArticles } from '../services/article-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Create from './CreatArticle'

export default function Articles() {
const apiKey = process.env.APIKEY
const [articles, setArticles] = useState([])
useEffect(()=>{
    getArticles() //calling the function to get the data
    .then(res => setArticles(res.data)) //setting state with returned data
}, [])
console.log(articles)
  return (
    <div>
        <>
        {articles.map((article)=>{
            return(
                <div>
                   <h4>{article.title}</h4> 
                </div>
            )
        })}
        </>
        <Create />
    </div>
  )
}
