import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Routhem - Regular.otf';

const Typography = createGlobalStyle`
 // to import a custom font
 /* @font-face {
    font-family: Routhem;
    src: url(${font});
  } */
  html {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  .center {
    text-align: center;
  }
`;

export default Typography;
