import { useState } from 'react'
import InputField from './components/InputField'
import { ITodo } from './model/todo';
import TodoList from './components/TodoList';

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if(todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="app">
      <h1>Todo App</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
