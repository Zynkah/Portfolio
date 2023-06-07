import { Typography, Divider, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const Bio = () => {
  return (
    <Container sx={{ margin: "2rem" }}>
      <Divider>About Me</Divider>
      <Grid container spacing={3} marginTop={3}>
        <Grid item xs={8}>
          <Typography variant="body1">
            Who am I? I am a web developer, who loves{" "}
            <i class="fa-brands fa-python" /> Python and{" "}
            <i class="fa-brands fa-react fa-spin" /> React.js. I attended Nucamp
            Coding Bootcamp and graduated with Honors in both thier 'Backend,
            SQL and DevOps with Python' certificate and their 'Full Stack Web
            and Mobile App Development' certificate. I found in that year of
            studying that I really like working with data. Therefore, I
            subscribed to a year of Datacamp and am working on becoming an
            expert in data analysis using Python, SQL and R.
            <br />
            When I am not working on my code, I am playing a{" "}
            <i class="fa-solid fa-gamepad" /> video game or watching anime. I am
            a huge fan of the Final Fantasy series, have been for as long as I
            can remember. I like action animes the most, but I enjoy a nice
            slice-of-life from time to time. I also really like working out in
            the gym. I like running the most, I just turn on some trap AMVs and
            go. I am also obsessed with <i class="fa-solid fa-cat" /> cats. I
            have too many cat figurines, and I adopt every stray cat in the
            nieghborhood.
            <br />
            My goal for my future is to work as a backend web developer.
            Although I enjoy front end as well, and wouldn't mind going down
            that route as well. I also would like to get better at game
            development. I really want to make my own game one day, one like
            Hollow Knight. The team that made that game are a huge inspiration
            in my life. I plan to finish my degree soon, and continue my
            education to accomplish my goals. Currently I am an backend web
            developer intern for <i class="fa-solid fa-cookie" /> Danica's
            Custom Bakes. I would like to level up to a junior developer in the
            near future!
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
  );
};

export default Bio;
