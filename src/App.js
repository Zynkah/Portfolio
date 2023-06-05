import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Divider,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Zena's Portfolio</Typography>
      </header>

      <Box sx={{ flexGrow: 1, margin: "2rem" }}>
        <Divider>My Projects</Divider>
        <Grid container spacing={3} marginTop={3}>
          <Grid item xs={6}>
            <Card sx={{ backgroundColor: "#f5f5f5" }}>
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
              <CardContent>
                <Divider />
                <Typography>
                  Final Fantasy X Fan Page built with Next.js, Next UI and
                  Material UI.
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href="https://github.com/Zynkah/FFX_Next.js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="primary">
                    GitHub Source Code
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ backgroundColor: "#f5f5f5" }}>
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
              <CardContent>
                <Divider />
                <Typography>
                  Mock Maid Cafe Website built with React.js, Node.js and
                  Bootstrap.
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href="https://github.com/Zynkah/React_Maid_Cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="primary">
                    GitHub Source Code
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <footer>
        <Divider>Links</Divider>
        <Grid container>
          <Grid item xs={6}>
            <Link
              href="https://github.com/Zynkah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github fa-fade" />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="https://www.linkedin.com/in/zena-creps-ba3631232/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin fa-fade" />
            </Link>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default App;
