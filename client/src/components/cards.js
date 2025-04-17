import React from "react";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

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

const useStyles = makeStyles({
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    height: "auto",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#1e1e1e",
    boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  button: {
    marginTop: "10px",
    textTransform: "none",
  },
});

const CardList = ({ articles = [] }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.cardContainer}>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Card key={index} className={classes.card}>
              <img
                src={article.urlToImage}
                alt={article.title}
                className={classes.image}
              />
              <CardContent className={classes.content}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ color: "#ffffff" }}
                >
                  {article.title?.length > 60
                    ? `${article.title.substring(0, 60)}...`
                    : article.title}
                </Typography>
                <Typography variant="body2" style={{ color: "#b0b0b0" }}>
                  {article.description?.length > 100
                    ? `${article.description.substring(0, 100)}...`
                    : article.description}
                </Typography>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  href={article.url}
                  target="_blank"
                  fullWidth
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6" align="center" style={{ color: "#ffffff" }}>
            No articles available
          </Typography>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CardList;
