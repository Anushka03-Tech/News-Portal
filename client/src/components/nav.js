import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import {
  Devices,
  LocalHospital,
  Movie,
  Public,
  SettingsApplications,
  SportsBasketball,
  Work,
} from "@material-ui/icons";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1976d2",
    },
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

const Navbar = ({ onCategoryChange }) => {
  const [value, setValue] = React.useState("general");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onCategoryChange(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        elevation={3}
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 9999,
          background: "#1e1e1e",
        }}
      >
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          style={{ backgroundColor: "#1e1e1e" }}
        >
          <BottomNavigationAction
            label="General"
            value="general"
            icon={<Public />}
            style={{ color: value === "general" ? "#1976d2" : "#b0b0b0" }}
          />
          <BottomNavigationAction
            label="Business"
            value="business"
            icon={<Work />}
            style={{ color: value === "business" ? "#1976d2" : "#b0b0b0" }}
          />
          <BottomNavigationAction
            label="Entertainment"
            value="entertainment"
            icon={<Movie />}
            style={{ color: value === "entertainment" ? "#1976d2" : "#b0b0b0" }}
          />
          <BottomNavigationAction
            label="Health"
            value="health"
            icon={<LocalHospital />}
            style={{ color: value === "health" ? "#1976d2" : "#b0b0b0" }}
          />
          <BottomNavigationAction
            label="Science"
            value="science"
            icon={<SettingsApplications />}
            style={{ color: value === "science" ? "#1976d2" : "#b0b0b0" }}
          />
          <BottomNavigationAction
            label="Sports"
            value="sports"
            icon={<SportsBasketball />}
            style={{ color: value === "sports" ? "#1976d2" : "#b0b0b0" }}
          />
          <BottomNavigationAction
            label="Technology"
            value="technology"
            icon={<Devices />}
            style={{ color: value === "technology" ? "#1976d2" : "#b0b0b0" }}
          />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
};

export default Navbar;
