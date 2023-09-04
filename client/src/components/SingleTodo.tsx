import { ITodo } from "../model/todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import Todolist from "./TodoList";
import { useState } from "react";
import "../app.scss";

interface TodosProps {
    todo: ITodo;
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const SingleTodo = ( {todo, todos, setTodos}: TodosProps ) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

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

        setTodos(todos.map( (todo) => (
            todo.id === id ? {...todo, todo:editTodo} : todo
        )));
        setEdit(false);
    };

  return (
    <form className="todos_single" onSubmit={ (event)=> handleEdit(event, todo.id) }>

        { edit ? (
            <input value={editTodo} onChange={(event) => setEditTodo(event.target.value)} />
        ) : todo.isDone ? (
            <span className="todos__single__text crossed__out">{todo.todo}</span>
        ) : (
            <span className="todos__single__text">{todo.todo}</span>
        )}

        <div>
            <span className="icon" onClick={ () => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit);
                }
            }}>
            <AiFillEdit />
            </span>
            <span className="icon" onClick={ () => handleDelete(todo.id)}>
            <AiFillDelete />
            </span>
            <span className="icon" onClick={ ()=> handleDone(todo.id)}>
                <MdOutlineDone />
            </span>
        </div>
    </form>
  );
};

export default SingleTodo