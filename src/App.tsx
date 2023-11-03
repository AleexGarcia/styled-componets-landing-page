import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";
import { theme } from "./theme";
import {GlobalStyle} from "./globalStyles";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
