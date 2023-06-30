import * as React from "react";
import {
  Typography,
  Divider,
  Container,
  Grid,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Bio = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container>
      <Divider>About Me</Divider>
      <Grid container spacing={3} marginTop={3}>
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{ padding: "10px", backgroundColor: "#282828" }}
          >
            <Accordion
              expanded={[expanded === "panel1", true]}
              onChange={handleChange("panel1")}
              sx={{ backgroundColor: "#343434", color: 'white' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <i class="fa-solid fa-dragon"></i> Who I am
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I am a web developer, who loves{" "}
                  <i class="fa-brands fa-python" /> Python and{" "}
                  <i class="fa-brands fa-react fa-spin" /> React.js. I attended
                  Nucamp Coding Bootcamp and graduated with honors in both the
                  'Backend, SQL and DevOps with Python' certificate and the
                  'Full Stack Web and Mobile App Development' certificate. I
                  found in that year of studying that I really like working with
                  data. Therefore, I subscribed to a year of Datacamp and am
                  working on becoming an expert in data analysis using Python,
                  SQL and R.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ backgroundColor: "#343434", color: 'white' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <i class="fa-solid fa-scroll"></i> Hobbies
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  When I am not working on my code, I am playing a{" "}
                  <i class="fa-solid fa-gamepad" /> video game or watching
                  anime. I am a huge fan of the Final Fantasy series, have been
                  for as long as I can remember. I like action animes the most,
                  but I enjoy a nice slice-of-life from time to time. I also
                  really like working out in the gym. I like running the most, I
                  just turn on some trap AMVs and go. I am also obsessed with{" "}
                  <i class="fa-solid fa-cat" /> cats. I have too many cat
                  figurines, and I adopt every stray cat in the nieghborhood.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ backgroundColor: "#343434", color: 'white' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <i class="fa-solid fa-wand-sparkles"></i> My Goals
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  My goal for my future is to work as a backend web developer.
                  Although I enjoy front end as well, and wouldn't mind going
                  down that route as well. I also would like to get better at
                  game development. I really want to make my own game one day,
                  one like Hollow Knight. The team that made that game are a
                  huge inspiration in my life. I plan to finish my degree soon,
                  and continue my education to accomplish my goals. Currently I
                  am an backend web developer intern for{" "}
                  <i class="fa-solid fa-cookie" /> Danica's Custom Bakes. I
                  would like to level up to a junior developer in the near
                  future!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ padding: "15px", backgroundColor: "#282828" }}
          >
            <img
              className="image"
              src="/img/Me_2.jpg"
              alt="Zena"
              width="275"
              height="307"
              align="center"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bio;
