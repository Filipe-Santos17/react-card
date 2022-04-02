import { createGlobalStyle } from "styled-components";

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