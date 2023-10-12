import React from 'react'
import { getArticles } from '../services/article-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


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
        <h1 className='Nav'>Articles List</h1>
        {/* <a href='/new'>New Article</a> */}
        
        {articles.map((article)=>{
            return(
                <div className='title'>
                   <a href='/new'>{article.title}</a> 
                {/* <p {article.description}/> */}
               {/* <input type='submit' name='submit' value='Edit' /> */}
               <form action={`/:${article._id}?_method=DELETE`} method="POST">
                        <input type='submit' value="DELETE"/>
                    </form>
                </div>
            )
        })} 
        </>
       
    </div>
  )
}
