import React from 'react'
import Todo from './Todo'

export default function Todos({todos,onDelete}) {
    return (
    <div className='container'>
        <h1>📃📃Todos List📃📃</h1>
        {todos.length===0? "No Todos to display":
        todos.map((todo)=>{
            return <Todo todo={todo} key={todo.sno} onDelete={onDelete}/>
        })}
    </div>
  )
}