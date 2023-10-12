import React from 'react'
import { getArticle, editArticle } from "../services/article-api"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditArticle() {
    const {id} = useParams()
    const nav = useNavigate()
    const [data,setData] = useState({})
    useEffect(()=>{
        getArticle(id)
        .then(res => setData(res.data))
    }, [])

    const editTheArticle = e =>{
        e.preventDefault()
        const updatedArticle = {title: e.target.title.value, description: e.target.description.value, markdown: e.target.markdown.value}
        editArticle(id, updatedArticle).then(()=> nav(`${id}`))
    }
  return (
    <div>
        <form onSubmit={editTheArticle}>
            {/* Title: <input type='text' name='title' defaultValue={data.title}/> */}
            Markdown: <input type='text' name='description' defaultValue={data.description}/>
            <input type='submit' />
        </form>
    </div>
  )
}
