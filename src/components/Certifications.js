import * as React from "react";
import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const Certifications = () => {
  return (
    <Container sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Divider>Certifications</Divider>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} marginTop={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#282828" }}>
              <CardContent>
                <CardMedia
                  className="image"
                  component="img"
                  height="700"
                  image="/img/Backend.png"
                  alt="backend"
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#282828" }}>
              <CardContent>
                <CardMedia
                  className="image"
                  component="img"
                  height="700"
                  image="/img/FullStack.png"
                  alt="Full Stack"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Certifications;
