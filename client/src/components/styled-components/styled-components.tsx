import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;
        margin: 0; 
        padding: 0;
        background: lightgreen;
    }
`

export const TodoWrapper = styled.div`
    margin: 80px auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    color: red;
    text-align: center;
`

export const TodoForm = styled.form`
    height: auto;
    display: flex;
    gap: 20px;
`

export const TodoInput = styled.input`
    width: 300px;
    padding: 13px 15px;
    border-radius: 6px;
    border: 1px solid transparent;
`

export const AddButton = styled.button`
    display: inline-block;
    width: 75px;
    flex: 1;
    border-radius: 6px;
    border: 1px solid transparent;
`
export const TodoListContainer = styled.div`
    margin: 30px auto;
    width: 95%;
    background: lightblue;
`

export const SingleTodoContainer = styled.form`
    width: auto;
    background: lightpink;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 14px 25px;
`

export const TodoIconWrapper = styled.div`
    display: flex;
    gap: 15px;
`

export const TodoIcon = styled.span`
    cursor: pointer;
    scale: 1.2;
`