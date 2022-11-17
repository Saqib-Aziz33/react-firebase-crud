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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { dispatch, loading } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClick = () => {
    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.username === ""
    ) {
      alert("feilds are required");
      return;
    }

    dispatch({ type: "SIGN_UP_REQUEST" });
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user signed in", userCredential);
        // change username
        dispatch({ type: "SIGN_UP_SUCCESS", payload: user });
        updateProfile(auth.currentUser, {
          displayName: formData.username,
        });
      })
      .then(() => {
        // Profile updated!
        dispatch({ type: "SIGN_UP_UPDATE", payload: formData.username });
        navigate("/");
        // ...
      })
      .catch((e) => {
        dispatch({ type: "SIGN_UP_FAILURE", payload: e.message });
        console.log("login error", e.code);
      });
  };

  return (
    <Box sx={{ my: 5 }}>
      <Container maxWidth="sm">
        <Stack spacing={2} component="form" autoComplete="off">
          <Typography variant="h5">Register</Typography>
          <TextField
            onChange={handleChange}
            value={formData.username}
            id="username"
            label="Username"
            type="text"
          />

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
            Register
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
export default Login;
