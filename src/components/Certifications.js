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

const Certifications = () => {
  return (
    <Container sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Divider>Certifications</Divider>
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={3} marginTop={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#f5f5f5" }}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="700"
                    image="/img/Backend.png"
                    alt="backend"
                  />
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#f5f5f5" }}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="700"
                    image="/img/FullStack.png"
                    alt="Full Stack"
                  />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Certifications;
