import styled from 'styled-components';

export const Container = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #10cf3d;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    gap: 2rem;

    .contacts-box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .info-box {
        display: flex;
        gap: 5px;

        .link {
            font-size: 18px;
            text-decoration: none;
        }
    }
`;