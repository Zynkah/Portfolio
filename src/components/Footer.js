import { Divider, Link } from "@mui/material";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <footer className="footer">
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
  );
};

export default Footer;
