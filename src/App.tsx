import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyles";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
