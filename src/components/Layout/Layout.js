import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material/";
import x from '@mui/material/Box';
const theme = createTheme({
  palette: {
    primary: {
      light: "#2a4154",
      main: "#001b2b",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#65a3ff",
      main: "#1d75d3",
      dark: "#004aa1",
      contrastText: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      textDecoration: "none",
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
