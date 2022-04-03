import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
`;

export const InputSection = styled.section`
    width: 50%;
    height: 100vh;
    background-color: #ECF0F1;

    footer p {
        text-align: center;
        font-size: 1.2rem;
        margin-top: 7rem;

        span{
            color: #58AF9B;
        }
    }
`;

export const CardSection = styled.section`
    width: 50%;
    height: 100vh;
    background-color: #58AF9B;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9rem 11rem 0;
`;
