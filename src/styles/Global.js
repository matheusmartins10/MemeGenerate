import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      padding: 0px;
      margin: 0px;
      outline: 0px;
      box-sizing: border-box;
      font-family: sans-serif
  }

  body {
      background: #eee;
  }

  button, input {
      outline: 0px;
  }

  button {
      cursor: pointer;
  }


`