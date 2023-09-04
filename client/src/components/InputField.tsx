import React from 'react'
import { AddButton, GlobalStyle, TodoForm, TodoInput } from './styled-components/styled-components';
import { createGlobalStyle } from 'styled-components';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ( {todo, setTodo, handleAdd}: InputFieldProps ) => {

  return (
    <>
    <GlobalStyle />
    <TodoForm className="input" onSubmit={handleAdd}>
        <TodoInput 
            className={"input_box"}
            value={todo}
            onChange= { (e) => setTodo(e.target.value) }
            placeholder="skriv här"
            type="text"
            />
             <AddButton className="input_submit" type="submit">Lägg till </AddButton>
    </TodoForm>
    </>
  )
}

export default InputField