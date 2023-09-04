import React from 'react'

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ( {todo, setTodo, handleAdd}: InputFieldProps ) => {

  return (
    <form className="input" onSubmit={handleAdd}>
        <input 
            className="input_box"
            value={todo}
            onChange= {
                (e) => setTodo(e.target.value)
            }
            placeholder="skriv här"
            type="text"
             />
             <button className="input_submit" type="submit">Lägg till </button>
    </form>
  )
}

export default InputField