import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #2E2E2E;
    --grey: #efefef;
    --red: #FF4949;
    --blue: #4682b4;
    --yellow: rgba(251,248,146,1);
    --brown: rgba(114,103,82,1);
    --gold: rgba(202,162,48,1);
    --darkgreen: rgba(29,95,85,1);
    --green: rgba(96,181,103,1);
  }

  html {
    background-color: var(--white);
    font-size: 10px;
  }
  
  body {
    font-size: 2rem;
    overflow-x: hidden;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    --cast: 2px;
    background: var(--blue);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 2px 5px 10px gray;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    span {
      vertical-align: middle;
    }
    &:hover {
      box-shadow: 0 0 10px gray;
      background-color: lightsteelblue;
      color: #36454f;
    }
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 1px solid black;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`;

export default GlobalStyles;
