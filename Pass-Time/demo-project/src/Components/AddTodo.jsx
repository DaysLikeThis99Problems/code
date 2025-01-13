import React, { useState } from 'react'
import './AddTodo.css'

export default function AddTodo(props) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blanked")
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div className='container' >
        <form onSubmit={submit}>
            <h1>➕Add a new Todo:</h1>
            <div id='div2'>
                <label htmlFor="title">Title</label>
            </div>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} id='title'/>
            <div id='div2'>
                <label htmlFor="desc">Description</label>
            </div>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" />
            <br />
            <button type='submit' id='btn'>Add Todo</button>
        </form>
    </div>
  )
}
