import { BrowserRouter, Routes, Route } from "react-router-dom";
// layout
import Base from "./components/layout/Base";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// hooks
import useUserContext from "./hooks/useUserContext";
import { useEffect } from "react";
// firebase
// eslint-disable-next-line
import { app, auth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";
// others
import "./app.scss";

function App() {
  const { dispatch } = useUserContext();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("current user", user);
        dispatch({ type: "LOAD_USER", payload: user });
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}
export default App;
