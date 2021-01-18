import React, { useState } from "react";
import './App.css';
//importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState('all');

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus} />
        
      <TodoList 
        todos={todos} 
        setTodos={setTodos}/>
    </div>
  );
}

export default App;