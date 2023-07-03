import { Typography } from "@mui/material";
import { Navbar, Link } from "@nextui-org/react";

export default function Nav() {
  return (
    <Navbar
      maxWidth="fluid"
      variant="sticky"
      css={{ marginBottom: "20px" }}
    >
      <Navbar.Brand>
        <Link href="/">
          <img src="/favicon.ico" alt="logo" />
        </Link>
        <Typography variant="h4" sx={{ marginLeft: "20px" }}>
          Zena Creps
        </Typography>
      </Navbar.Brand>

      <Navbar.Content enableCursorHighlight hideIn="xs">
        <Link
          href="https://github.com/Zynkah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github fa-fade" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/zena-creps-ba3631232/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin fa-fade" />
        </Link>
        <Link
          href="https://www.twitch.tv/zynkah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-twitch fa-fade" />
        </Link>
        <Link
          href="https://zynkah-merch-2.creator-spring.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-tag fa-fade" />
        </Link>
      </Navbar.Content>
    </Navbar>
  );
}
