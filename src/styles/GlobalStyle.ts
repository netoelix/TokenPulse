import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
      color: #E5E5E5;
    }
    body::before {
      content: "";
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(110deg, rgba(252,163,17,1) 20%, rgba(20,33,61,1) 10%,
       rgba(2,0,36,1) 50%);
      z-index: -5;
    }
`;
export default GlobalStyle;
