import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import { colors } from '~/styles';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nobile:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: ${colors.backgroundColor};
    -webkit-font-smoothing: antialiased !important;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
      transition: all .15s linear;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${colors.light};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${colors.blue};
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${darken(0.1, colors.blue)};
    }

    .MuiTypography-body1 {
      font-size: 14px;
      font-family: 'Nobile', sans-serif;
      font-weight: normal;
    }
  }
  body, input, button {
    font-size: 14px;
    font-family: 'Nobile', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
