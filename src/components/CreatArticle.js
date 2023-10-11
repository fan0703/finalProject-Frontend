import React from 'react'
import { useNavigate } from "react-router-dom"
import { createArticle } from '../services/article-api'

export default function Create(){
    const nav = useNavigate()
    const createTheArticle = (e) =>{
        const article = {title: e.target. title.value, description: e.target.description.value}
        createArticle(article).then(()=> nav('/'))
    }
return(
    <div>
        <h4>Create a Markdown</h4>
        <form onSubmit={createTheArticle}>
            Title: <input type='text'
            name='title' id='dsc'/><br />
            Description: <input type='text'
            name='description' id='dsc'/><br/>
            Markdown: <input type='text'
            name='markdown' id='dsc'/><br />
            <input type='submit' />
        </form>
    </div>
)
}

