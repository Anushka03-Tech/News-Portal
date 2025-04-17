import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Header from "./components/header";
import Navbar from "./components/nav";
import CardList from "./components/cards";
import ApiService from "./services/api";

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

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await ApiService.fetchArticles(category);
      setArticles(response);
    };
    fetchArticles();
  }, [category]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          backgroundColor: "#121212",
          minHeight: "100vh",
          color: "#ffffff",
        }}
      >
        <Header title="News Aggregator" />
        <Navbar onCategoryChange={handleCategoryChange} />
        <CardList articles={articles} />
      </div>
    </ThemeProvider>
  );
};

export default App;
