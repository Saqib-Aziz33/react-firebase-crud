import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { dispatch, loading } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClick = () => {
    if (formData.email === "" || formData.password === "") {
      alert("feilds are required");
      return;
    }

    dispatch({ type: "LOGIN_REQUEST" });
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user signed in", userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/");
        // ...
      })
      .catch((e) => {
        dispatch({ type: "LOGIN_FAILURE", payload: e.message });
        console.log("login error", e.code);
      });
  };

  return (
    <Box>
      <Container maxWidth="sm">
        <Stack spacing={2} component="form" autoComplete="off">
          <Typography variant="h5">Login</Typography>
          <TextField
            onChange={handleChange}
            value={formData.email}
            id="email"
            label="Email"
            type="email"
          />
          <TextField
            onChange={handleChange}
            value={formData.password}
            id="password"
            label="Password"
            type="password"
          />
          <Button disabled={loading} onClick={handleClick} variant="contained">
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
export default Login;
