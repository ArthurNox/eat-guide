import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

  * {
    box-sizing: border-box;
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
  
  a{
    text-decoration: none;
  }
`;
