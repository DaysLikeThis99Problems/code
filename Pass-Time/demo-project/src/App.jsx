import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import React,{useEffect, useState} from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
  }

  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <BrowserRouter>
    <>
        <Header title="TwoDuos"/>
        <Routes>
          <Route path="/" element={
              <>
              <AddTodo addTodo={addTodo}/>
              <br />
              <Todos todos={todos} onDelete={onDelete}/>
              <br />
              </>
            }>
          </Route>
          <Route path="/about" element={<About />}/>
        </Routes>
        
        <Footer/>
    </>
    </BrowserRouter>
  );
}

export default App;

