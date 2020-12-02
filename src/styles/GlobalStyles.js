import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --orange: #F39237;
    --pink: #BF1363;
    --blue: #0E79B2;
    --green: #32E875;
    --black: #191923;
    --white: #FBFEF9;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 2rem;
    overflow: hidden;
  }
  button {
    background: var(--white);
    color: var(--black);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 dimgrey;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
