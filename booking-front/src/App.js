import { createTheme, ThemeProvider } from "@mui/material/styles";
import RootNavigation from "./navigation/RootNavigation";
import { BrowserRouter } from "react-router-dom";
import getDesignTokens from "./utils/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const mode = "light";
  const theme = createTheme(getDesignTokens(mode));

  return (
    <GoogleOAuthProvider clientId="8476012625-cksfp787o6ia6vhita9lesptqsb6ihas.apps.googleusercontent.com">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <RootNavigation />
        </ThemeProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
