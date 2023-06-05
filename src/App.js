import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my portolio!</p>

        <Box sx={{ flexGrow: 1, margin: "2rem" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card>
                <CardActionArea>
                  <a
                    className="App-link"
                    href="https://final-fantasy-x.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      component="img"
                      height="400"
                      image="/img/FFX.png"
                      alt="Final fantasy x"
                    />
                  </a>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardActionArea>
                <a
                  className="App-link"
                  href="https://maid-cafe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <CardMedia
                      component="img"
                      height="400"
                      image="/img/Cafe.png"
                      alt="Final fantasy x"
                    />
                </a>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <a
                  className="App-link"
                  href="https://github.com/Zynkah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My GitHub
                </a>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <a
                  className="App-link"
                  href="https://www.linkedin.com/in/zena-creps-ba3631232/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
