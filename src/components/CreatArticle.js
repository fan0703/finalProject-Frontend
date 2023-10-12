import React from 'react'
import { useNavigate } from "react-router-dom"
import { createArticle } from '../services/article-api'

export default function Create(){
    const nav = useNavigate()
    const createTheArticle = (e) =>{
        const article = {title: e.target. title.value, description: e.target.description.value, markdown: e.target.markdown.value}
        createArticle(article).then(()=> nav('/'))
    }
return(
    <div>
        {/* <h4>Create a Markdown</h4> */}
        <form onSubmit={createTheArticle}>
        
            {/* Markdown: <input type='text'
            name='markdown' id='dsc'/><br /> */}
            <a href='/new/edit'>Create Markdown</a>
            {/* <input type='submit' value='Create Markdown'/> */}
        </form>
    </div>
)
}

