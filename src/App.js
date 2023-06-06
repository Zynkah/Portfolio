import "./App.css";
import "@fontsource/roboto/300.css";
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
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Zena Creps</Typography>
      </header>
      <Container sx={{ margin: "2rem" }}>
        <Divider>About Me</Divider>
        <Grid container spacing={3} marginTop={3}>
          <Grid item xs={8}>
            <Typography variant="body1">
              Who am I? I am a web developer, who loves{" "}
              <i class="fa-brands fa-python" /> Python and{" "}
              <i class="fa-brands fa-react fa-spin" /> React.js. I attended
              Nucamp Coding Bootcamp and graduated with Honors in both thier
              'Backend, SQL and DevOps with Python' certificate and their 'Full
              Stack Web and Mobile App Development' certificate. I found in that
              year of studying that I really like working with data. Therefore,
              I subscribed to a year of Datacamp and am working on becoming an
              expert in data analysis using Python, SQL and R.
              <br />
              When I am not working on my code, I am playing a{" "}
              <i class="fa-solid fa-gamepad" /> video game or watching anime. I
              am a huge fan of the Final Fantasy series, have been for as long
              as I can remember. I like action animes the most, but I enjoy a
              nice slice-of-life from time to time. I also really like working
              out in the gym. I like running the most, I just turn on some trap
              AMVs and go. I am also obsessed with <i class="fa-solid fa-cat" />{" "}
              cats. I have too many cat figurines, and I adopt every stray cat
              in the nieghborhood.
              <br />
              My goal for my future is to work as a backend web developer.
              Although I enjoy front end as well, and wouldn't mind going down
              that route as well. I also would like to get better at game
              development. I really want to make my own game one day, one like
              Hollow Knight. The team that made that game are a huge inspiration
              in my life. I plan to finish my degree soon, and continue my
              education to accomplish my goals. Currently I am an backend web
              developer intern for <i class="fa-solid fa-cookie" /> Danica's
              Custom Bakes. I would like to level up to a junior developer in
              the near future!
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <img
              className="profile"
              src="/img/Me.png"
              alt="Zena"
              width="300"
              height="391"
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ flexGrow: 1, margin: "2rem" }}>
        <Divider>My Projects</Divider>
        <Grid container spacing={3} marginTop={3}>
          <Grid item xs={6}>
            <Card sx={{ backgroundColor: "#f5f5f5" }}>
              <CardActionArea>
                <Link
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
                </Link>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.34)",
                    color: "white",
                    padding: "2px",
                  }}
                >
                  <Typography variant="subtitle2">
                    Click Image to View
                  </Typography>
                </Box>
              </CardActionArea>
              <CardContent>
                <Divider />
                <Typography variant="h6">
                  Final Fantasy X Fan Page built with
                </Typography>
                <i class="fa-solid fa-n" />
                <span style={{ marginLeft: "10px" }}></span>
                <i class="fab fa-node-js" />
                <Typography variant="subtitle2">
                  Next.js, Node.js.
                  <br />
                  Designed with Next UI and Material UI.
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href="https://github.com/Zynkah/FFX_Next.js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="primary">
                    <i class="fa-solid fa-code" />
                    <span style={{ marginLeft: "10px" }}></span>
                    GitHub Source Code
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ backgroundColor: "#f5f5f5" }}>
              <CardActionArea>
                <Link
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
                </Link>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.34)",
                    color: "white",
                    padding: "2px",
                  }}
                >
                  <Typography variant="subtitle2">
                    Click Image to View
                  </Typography>
                </Box>
              </CardActionArea>
              <CardContent>
                <Divider />
                <Typography variant="h6">
                  Mock Maid Cafe Website built with{" "}
                </Typography>
                <i class="fa-brands fa-react fa-spin" />
                <span style={{ marginLeft: "10px" }}></span>
                <i class="fa-brands fa-node" />
                <Typography variant="subtitle2">
                  React.js and Node.js.
                  <br />
                  Designed with Bootstrap.
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href="https://github.com/Zynkah/React_Maid_Cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="primary">
                    <i class="fa-solid fa-code" />
                    <span style={{ marginLeft: "10px" }}></span>
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
          <Grid item xs={3}>
            <Link
              href="https://github.com/Zynkah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github fa-fade" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              href="https://www.linkedin.com/in/zena-creps-ba3631232/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin fa-fade" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              href="https://www.twitch.tv/zynkah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-twitch fa-fade" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              href="https://zynkah-merch-2.creator-spring.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-tag fa-fade" />
            </Link>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default App;
