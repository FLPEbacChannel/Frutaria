import styled from 'styled-components';

export const Container = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #58a724c8;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
`;

export const BoxIcon = styled.div`
    img {
        width: 300px;
    }

`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    transition: 0.2s ease;
    cursor: pointer;

     a {
        font-size: 24px;
        text-decoration: none;
        color: #fff;

        &:hover {
            opacity: 0.9;
            transform: scale(1.02);
        }
    }
`;