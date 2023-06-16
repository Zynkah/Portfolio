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

const Cards = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: "2rem" }}>
      <Divider>My Projects</Divider>
      <Grid container spacing={3} marginTop={3}>
        <Grid item xs={12} md={6}>
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
                <Typography variant="subtitle2">Click Image to View</Typography>
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
                Next.js and Node.js.
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

        <Grid item xs={12} md={6}>
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
                <Typography variant="subtitle2">Click Image to View</Typography>
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
  );
};

export default Cards;
