import { useTheme } from "next-themes";
import { ThemeProvider, createTheme } from "@mui/material";

const createMuiTheme = () => {
  return createTheme({
    palette: {},
    components: {},
  });
};

const MuiThemeProvider = ({ children }) => {
  const { theme } = useTheme;
  const muiTheme = createMuiTheme(theme);

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
