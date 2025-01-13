import React from 'react'
import './todo.css'
export default function Todo({todo,onDelete}) {
  return (
    <div id='todo'>
        <pre><h4 id='h4'>  {todo.sno}:{todo.title}</h4></pre>
        <pre><p>     ➡️Description:{todo.desc}</p></pre>
        <pre>     <button id='btn1' onClick={()=>{onDelete(todo)}}>Delete</button></pre>
    </div>
  )
}
