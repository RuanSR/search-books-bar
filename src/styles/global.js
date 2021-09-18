import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --btn-default-background: #6c757d;
    --btn-info-background: #17a2b8;
    --btn-success-background: #28a745;

    --text-color-default: #ffffff;

    --top-bar-background: #343a40;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px){
        font-size: 87.5%; //14px
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .container{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;
