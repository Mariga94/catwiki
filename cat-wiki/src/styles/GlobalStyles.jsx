import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

ul > li {
    list-style: none;
}

a {
    text-decoration: none;
}

h1 {
    
}

body {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    min-height: 100svh;
    // padding: 100px 95px 0 95px;
}

`;
