import React from "react";
import { ThemeProvider, createTheme, Typography } from "@material-ui/core";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
});

const Header = ({ title, tagline }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <header
        style={{
          marginBottom: 30,
          textAlign: "center",
          padding: "20px 0",
          background: "#1e1e1e",
          borderRadius: "10px",
          color: "#ffffff",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          InfoSphere
        </Typography>
        {tagline && (
          <Typography
            variant="h6"
            component="p"
            style={{
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
              color: "#b0b0b0",
              marginTop: "10px",
            }}
          >
            {tagline}
          </Typography>
        )}
        <Typography
          variant="subtitle1"
          component="p"
          style={{
            fontFamily: "Lora, serif",
            color: "#b0b0b0",
            marginTop: "8px",
          }}
        >
          "Your Gateway to Unbiased News & Global Insights"
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          style={{
            fontFamily: "Raleway, sans-serif",
            fontStyle: "italic",
            color: "#888",
            marginTop: "5px",
          }}
        >
          "Stay informed. Stay ahead."
        </Typography>
      </header>
    </ThemeProvider>
  );
};

export default Header;
