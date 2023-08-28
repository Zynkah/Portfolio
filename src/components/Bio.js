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

export default function Bio() {
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
              sx={{ backgroundColor: "#343434", color: "white" }}
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
                  I'm a passionate web developer with a strong affection for{" "}
                  <i class="fa-brands fa-python" /> Python and{" "}
                  <i class="fa-brands fa-react fa-spin" /> React.js. My
                  educational journey led me to the Nucamp Coding Bootcamp,
                  where I excelled and proudly earned honors in both the
                  'Backend, SQL and DevOps with Python' certificate as well as
                  the 'Full Stack Web and Mobile App Development' certificate.
                  During that transformative year of learning, I discovered a
                  deep affinity for data-related work. This newfound interest
                  prompted me to dive even deeper. I've embarked on a year-long
                  subscription with Datacamp, dedicating myself to mastering
                  data analysis using the power of Python, SQL, and R. My goal
                  is to become an accomplished expert in this field, continually
                  expanding my skill set.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ backgroundColor: "#343434", color: "white" }}
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
                  Beyond my coding endeavors, I find solace in a variety of
                  hobbies. Video games <i class="fa-solid fa-gamepad" /> and
                  anime captivate my leisure hours, offering both excitement and
                  relaxation. I am an enthusiast of the Final Fantasy series, my
                  admiration for it dates back as far as my memory goes. Another
                  passion of mine lies in the realm of physical activity. I'm a
                  dedicated gym-goer who particularly enjoys the liberating act
                  of running. With invigorating trap AMVs as my backdrop, I
                  venture into my runs, driven by the rhythm and energy. In
                  addition to these pursuits, I have a sincere fondness for
                  feline <i class="fa-solid fa-cat" /> companions. My love for
                  cats is unmistakable, evident in my collection of numerous cat
                  figurines. My affection extends beyond inanimate objects; I'm
                  known to welcome every stray cat in my neighborhood into my
                  care.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ backgroundColor: "#343434", color: "white" }}
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
                  My aspirations for the future center around becoming a
                  proficient backend web developer. While I do find enjoyment in
                  front-end development and could consider pursuing that avenue
                  too, I'm also keen on enhancing my game development skills.
                  The ultimate dream is to create a game similar to Hollow
                  Knight, drawing inspiration from the incredible team behind
                  its creation. Their work has deeply influenced me. In pursuit
                  of these ambitions, I'm working towards completing my degree
                  in the near term and continuing my educational journey to gain
                  the necessary skills. Currently, I am gaining practical
                  experience as a backend web developer intern at{" "}
                  <i class="fa-solid fa-cookie" /> Danica's Custom Bakes. My aim
                  is to progress to a junior developer role in the upcoming
                  period, aligning with my continuous growth and pursuit of
                  excellence.
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
}
