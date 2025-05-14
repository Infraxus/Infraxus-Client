import { createGlobalStyle } from "styled-components";
import color from "./color";


const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'Anta';
        src: url('@/assets/fonts/Anta-Regular.ttf');
        font-weight: normal;
        font-style: normal;
    }

    body {
        padding: 0
        margin: 0
        background-color: ${color.NeutralColor800};
    }

    ul,
    li {
        list-style: none;
    }

    p {
        display: inline-block;
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
    }

    label {
        cursor: pointer;
    }
`