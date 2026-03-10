import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 450px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    background-color: #31fd03;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
    rgba(0, 0, 0, 0.12) 0px -12px 30px, 
    rgba(0, 0, 0, 0.12) 0px 4px 6px, 
    rgba(0, 0, 0, 0.17) 0px 12px 13px, 
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

    h1 {
        color: #fff;
        font-family: 'Nunito', sans-serif;
        margin-bottom: 24px;
        font-size: 1.8rem;
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    label {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        color: #4a4a4a;
        margin-left: 4px;
    }
    
`

export const Input = styled.input`
    padding: 12px 16px;
    border-radius: 12px;
    border: 2px solid #e2e8f0;
    outline: none;
    transition: 0.2 ease;
    font-size: 1rem;

    &:focus {
        border-color: black ;
        box-shadow: 0 0 0 3px rgba(49, 253, 3, 0.2);
    }

`

export const Button = styled.button`
    margin-top: 10px;
    padding: 14px;
    border-radius: 12px;
    border: none;
    background-color: #f6f9f6;
    color: #000;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: filter 0.2s, transform 0.1;

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        transform: scale(0.98);
    }
`;
