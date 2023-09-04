import { ITodo } from "../model/todo";
import SingleTodo from "./SingleTodo";

interface TodosProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>

}

const Todolist = ( {todos, setTodos}: TodosProps ) => {
  return (
    <div className="todos">
        {todos.map(todo=>(
            <SingleTodo 
                todo={todo} 
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
            />

        ))}
    </div>
  );
}

export default Todolist