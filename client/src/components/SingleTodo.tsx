import { ITodo } from "../model/todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import Todolist from "./TodoList";
import { useState } from "react";
import "../app.scss";
import { SingleTodoContainer, TodoIconWrapper, TodoIcon} from "./styled-components/styled-components";

interface TodosProps {
    todo: ITodo;
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}


const SingleTodo = ( {todo, todos, setTodos}: TodosProps ) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleDone = (id: number) => {
        setTodos(
            todos.map( (todo) => 
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (event: React.FormEvent, id: number) => {
        event.preventDefault();
        setIsSelected(!isSelected);

        setTodos(todos.map( (todo) => (
            todo.id === id ? {...todo, todo:editTodo} : todo
        )));
        setEdit(false);
    };

  return (
    <SingleTodoContainer selected={ isSelected } className="todos_single" onSubmit={ (event: React.FormEvent<HTMLFormElement>
        )=> handleEdit(event, todo.id) }>

        { edit ? (
            <input value={editTodo} onChange={(event) => setEditTodo(event.target.value)} />
        ) : todo.isDone ? (
            <span className="todos__single__text crossed__out">{todo.todo}</span>
        ) : (
            <span className="todos__single__text">{todo.todo}</span>
        )}

        <TodoIconWrapper>
            <TodoIcon className="icon" onClick={ () => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit);
                }
            }}>
            <AiFillEdit />
            </TodoIcon>
            <TodoIcon className="icon" onClick={ () => handleDelete(todo.id)}>
            <AiFillDelete />
            </TodoIcon>
            <TodoIcon className="icon" onClick={ ()=> handleDone(todo.id)}>
                <MdOutlineDone />
            </TodoIcon>
        </TodoIconWrapper>
    </SingleTodoContainer>
  );
};

export default SingleTodo