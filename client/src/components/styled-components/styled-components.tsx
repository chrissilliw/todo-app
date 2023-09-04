import styled, { createGlobalStyle, keyframes } from "styled-components";

interface ISingleTodoContainer {
    selected: boolean;
}

const fadeIn = keyframes`
    from {
        background-color: lightpink;
    }
    to {
        background-color: purple;
    }
`

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;
        margin: 0; 
        padding: 0;
        background: #f8f8f8;
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
    color: #000000;
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const AddButton = styled.button`
    display: inline-block;
    width: 75px;
    flex: 1;
    border-radius: 6px;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const TodoListContainer = styled.div`
    margin: 30px auto;
    width: 100%;
    background: lightblue;
`

export const SingleTodoContainer = styled.form<ISingleTodoContainer>`
    width: auto;
    background: #05B1D0;
    color: #f8f8f8;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 14px 25px;
    /* animation: ${fadeIn} 2s ease-in-out;
    ${({ selected }) => selected && 'background: purple'} */
`;

export const TodoIconWrapper = styled.div`
    display: flex;
    gap: 15px;
`

export const TodoIcon = styled.span`
    cursor: pointer;
    scale: 1.2;
`