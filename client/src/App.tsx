import { useState } from 'react'
import InputField from './components/InputField'
import { ITodo } from './model/todo';
import TodoList from './components/TodoList';
import { Title, TodoWrapper } from "./components/styled-components/styled-components";

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
    <>
    
      <TodoWrapper>
        <div className="app">
          <Title>Todo App</Title>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </TodoWrapper>
    </>
  )
}

export default App
