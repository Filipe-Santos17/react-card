import styled from 'styled-components';
import fontHalter from "./halter-webfont.woff"

export const SectionCard = styled.section`
    margin: auto;
    @font-face {
        font-family: 'Halter, sans-serif';
        src: url(${fontHalter}) format('woff');
    }
    width: 21.5rem;
    height: 12.9rem;
    background-color: #3399cc;
    border-radius: .5rem;
    margin-top: 2rem;

    .Content{
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        display: flex;
        flex-flow: column nowrap;
    }
`;

export const TopIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .chip{
        width: 3rem;
        width: 2rem;
        margin-top: 1.2rem;

        svg {
           width: 100%;
            height: 100%;
        }
    }

    img {
        width: 3rem;
        height: 2rem;
    }
`;  

export const NumCard = styled.h2`
    margin-top: 2rem;
    font-size: 1.7rem;
    text-align: left;
`;

export const ContentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    bottom: 0;
    margin-top: 3.7rem;

    h4.nome{
        font-size: 1rem; 
        text-transform: uppercase;
    }

    p {
        font-size: 1rem;
        margin-right: 1.5rem;
    }
`;