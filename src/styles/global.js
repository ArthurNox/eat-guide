import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {

  }

  body, input, button {
    font: 14px 'Roboto', sans-serif!important;
  }

  #root {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  body {
    height: 100%!important;
    background: #292929 ;
    -webkit-font-smoothing: antialiased;
  }

  li {
    list-style: none;
  }
`;
