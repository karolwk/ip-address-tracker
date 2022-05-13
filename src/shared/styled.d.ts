import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
    };

    fonts: {
      size: string;
      weight: enum;
    };

    widths: {
      mobileXS: string;
      mobile: string;
      tablets: string;
      desktop: string;
    };
  }
}
