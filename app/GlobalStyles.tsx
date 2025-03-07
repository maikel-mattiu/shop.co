"use client"

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Integral CF';
    src: url('/fonts/Integral CF/Fontspring-DEMO-integralcf-regular.woff2') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Variable.woff2') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Variable.woff2') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Variable.woff2') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Variable.woff2') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Variable.woff2') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-VariableItalic.woff2') format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    max-width: 100vw;
  }
  body, input, button {
    font-family: var(--font-integral-cf), sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`