import React from 'react'

export default function Todo({todo,onDelete}) {
  return (
    <div>
        
        <pre><h4>  {todo.sno}:{todo.title}</h4></pre>
        <pre><p>    ➡️Description:{todo.desc}</p></pre>
        <pre>    <button className='btn' onClick={()=>{onDelete(todo)}}>Delete</button></pre>
    </div>
  )
}
