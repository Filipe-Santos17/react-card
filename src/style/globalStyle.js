import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        scroll-behavior: smooth;
        /*font-family: ;*/
        font-size: 10px;
    }
`;

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
`;
