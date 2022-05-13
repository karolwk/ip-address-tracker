import { createGlobalStyle, DefaultTheme } from 'styled-components';

enum FONT_WEIGHTS {
  normal = 400,
  bold = 500,
  bolder = 700,
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Rubik', Sans-Serif;
    color: hsl(0, 0%, 17%);
  }  
`;

export const myTheme: DefaultTheme = {
  colors: {
    main: 'hsl(0, 0%, 17%)',
    secondary: 'hsl(0, 0%, 59%)',
  },
  fonts: {
    size: '16px',
    weight: FONT_WEIGHTS,
  },
  widths: {
    mobileXS: '320px',
    mobile: '375px',
    tablets: '600px',
    desktop: '768px',
  },
};
