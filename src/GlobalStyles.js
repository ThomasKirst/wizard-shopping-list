import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.25rem;
    background: white;
  }

  :root {
    --primary: palevioletred;
    --secondary: rebeccapurple;
    --warning: tomato;
    --success: #badaba;
  }
`;
