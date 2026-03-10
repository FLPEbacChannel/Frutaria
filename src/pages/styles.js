import styled from 'styled-components';
import backgroundImg from '../../public/backgroundImg.png'

export const Container = styled.div`
    height: 100vh;
`;

export const BoxProducts = styled.section`
    height: 100vh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

`