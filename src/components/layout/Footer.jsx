import { Typography, Container } from "@mui/material";

function Footer() {
  return (
    <Container sx={{ p: 1 }}>
      <Typography textAlign="center" variant="body1">
        &copy;2022 react firebase crud app
      </Typography>
    </Container>
  );
}
export default Footer;
