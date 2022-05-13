import MapView from './views/MapView/MapView';
import HeaderView from './views/HeaderView/HeaderView';
import { GlobalStyle, myTheme } from './App.styles';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <HeaderView />
        <MapView />
      </ThemeProvider>
    </>
  );
};

export default App;
