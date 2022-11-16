import {
  AppBar,
  Avatar,
  Button,
  Container,
  Stack,
  Toolbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Signout from "../utils/Signout";
import useUserContext from "../../hooks/useUserContext";

function Header() {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <Toolbar>
      <Container>
        <AppBar elevation={1} sx={{ bgcolor: "#fff", p: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to="/">
              <Avatar src="/assets/logo.png" />
            </Link>

            {/* if user is signedin or not */}
            {user == null ? (
              <Stack direction="row" spacing={2}>
                <Button onClick={() => navigate("/login")}>Login</Button>
                <Button
                  variant="contained"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </Button>
              </Stack>
            ) : (
              <Stack direction="row" spacing={2}>
                <Button sx={{ color: "#000" }}>{user.displayName}</Button>
                <Signout />
              </Stack>
            )}
          </Stack>
        </AppBar>
      </Container>
    </Toolbar>
  );
}
export default Header;
