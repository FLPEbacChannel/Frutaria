import styled from 'styled-components';


export const Container = styled.div`
    width: 200px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background-color: green;
    border: 1px solid black;
    border-radius: 20px;
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    transition: transform 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
    rgba(0, 0, 0, 0.12) 0px -12px 30px, 
    rgba(0, 0, 0, 0.12) 0px 4px 6px, 
    rgba(0, 0, 0, 0.17) 0px 12px 13px, 
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

    &:hover {
        transform: scale(1.02);
    }

    .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        color: #fff;
        cursor: pointer;    
        font-weight: bold;
    }


    .image-container {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        
    }

    img {
        object-fit: contain;
        width: 100px
    }

    .info {
        text-align: center;
        color: #fff;

        h3 {
            margin: 5px 0;
            font-size: 1.2rem;
            font-weight: 700;
        }

        h4 {
            margin: 0;
            font-weight: 400;
            opacity: 0.9;
        }
    }
    

`