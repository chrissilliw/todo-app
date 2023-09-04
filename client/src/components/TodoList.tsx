import { useState } from "react";
import { ITodo } from "../model/todo";
import SingleTodo from "./SingleTodo";
import { TodoListContainer } from "./styled-components/styled-components";


interface TodosProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>

}

const Todolist = ( {todos, setTodos}: TodosProps ) => {

  return (
    <TodoListContainer className="todos">
        {todos.map(todo=>(
          // <SingleTodoStyled>
            <SingleTodo 
                todo={todo} 
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
            />
          // </SingleTodoStyled>

        ))}
    </TodoListContainer>
  );
}

export default Todolist