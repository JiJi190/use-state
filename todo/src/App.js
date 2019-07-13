import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
const [todoArray, setTodoArray] = useState([
  {id: 1,
  task: 'Wash Car',
  completed: false},
  {id: 2,
    task: 'QWe',
    completed: false},
    {id: 3,
      task: 'Wa',
      completed: false}
])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList todoArray={todoArray}/>
      <TodoForm />
    </div>
  );
}

export default App;
