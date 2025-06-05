import { createTheme, ThemeProvider } from "@mui/material/styles";
import RootNavigation from "./navigation/RootNavigation";
import { BrowserRouter } from "react-router-dom";
import getDesignTokens from "./utils/theme";

const App = () => {
  const mode = "light";
  const theme = createTheme(getDesignTokens(mode));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RootNavigation />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
